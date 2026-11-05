/// <reference path="../../pb_data/types.d.ts" />
// Calls the Gemini API on behalf of the AI routes. The key only exists in the
// server's environment (GEMINI_API_KEY), it never reaches the browser.
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models"
const DEFAULT_MODEL = "gemini-flash-latest"
const GENERIC_ERROR = "Sikertelen kérés a Gemini API felé, próbáld újra később."

const KINDS = {
  summary: {
    prompt: (courseName) => `Egyetemi tantárgy megnevezése: ${courseName}. Foglald össze ezeket a tárgyhoz kapcsolódó
        pdf dokumentumokat, adj rövid témaleírást a tantárggyal
        kapcsolatban és készíts tanulási tervet a tantárgyhoz és javasolj az interneten megtalálható tárgyhoz kapcsolódó érdekes
        tartalmat (pl. videók, cikkek és könyvek). Az ajánlott tartalmakhoz adj egy google/youtube/wikipédia keresés linket. Nem működő
        linkek használatát mellőzd.
        Az összes lépéshez használhatsz interneten fellelhető tartalmakat. Az első szó legyen a vastagon szedett 'Összefoglaló' és kezdd is el azonnal az
        összefoglalást. Az utolsó pedig a legutolsó generált link.`,
    result: (text) => ({ summary: text }),
  },
  flashcards: {
    prompt: () => `Generálj a PDF-ek alapján 10 tanulókártyát. A Nehézség (difficulty) property 3 értéket vehet fel: Könnyű, Közepes, Nehéz.
        A lista úgy épüljön fel, hogy elöszőr a könnyű, majd a közepes és végül a nehéz kérdések következzenek.`,
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: {
        description: "Tanulókártyák listája",
        type: "array",
        items: {
          type: "object",
          properties: {
            front: { type: "string", description: "Tanulókártya kérdése", nullable: false },
            back: { type: "string", description: "Tanulókártya válasza", nullable: false },
            difficulty: { type: "string", description: "Nehézség", nullable: false },
          },
          required: ["front", "back", "difficulty"],
        },
      },
    },
    result: (text) => ({ flashcards: JSON.parse(text) }),
  },
}

// Gemini allows only 10 files :(
function readFilesAsParts(record) {
  const fs = $app.newFilesystem()
  try {
    return record.getStringSlice("files").map((name) => {
      const reader = fs.getReader(`${record.baseFilesPath()}/${name}`)
      try {
        const data = Buffer.from(toBytes(reader)).toString("base64")
        return { inlineData: { data, mimeType: "application/pdf" } }
      } finally {
        reader.close()
      }
    })
  } finally {
    fs.close()
  }
}

// Turns a failed Gemini response into an error with a message for the user.
function geminiError(status, model) {
  if (status === 400 || status === 401 || status === 403) {
    return new ApiError(502, "Sikertelen kérés: hibás Gemini API kulcs. Ellenőrizd a GEMINI_API_KEY értékét a PocketBase szerveren.")
  }
  if (status === 402) {
    return new ApiError(502, "Sikertelen kérés: elfogyott a Gemini projekt kreditje. Tölts fel kreditet vagy állíts be fizetési módot az AI Studióban (https://ai.studio/projects).")
  }
  if (status === 429) {
    return new TooManyRequestsError("Sikertelen kérés: elfogyott a Gemini API kerete, próbáld újra később.")
  }
  if (status === 404) {
    return new ApiError(502, `Sikertelen kérés: a(z) "${model}" modell nem elérhető. Állíts be másikat a GEMINI_MODEL változóval.`)
  }
  return new ApiError(502, GENERIC_ERROR)
}

// Generates the given kind of AI content from a course instance's files.
function generate(record, kind) {
  const config = KINDS[kind]
  if (!config) throw new NotFoundError()

  const apiKey = $os.getenv("GEMINI_API_KEY")
  if (!apiKey) {
    throw new ApiError(503, "Sikertelen kérés: hiányzó Gemini API kulcs. Állítsd be a GEMINI_API_KEY változót a PocketBase szerveren.")
  }
  const model = $os.getenv("GEMINI_MODEL") || DEFAULT_MODEL

  const course = $app.findRecordById("courses", record.getString("course"))
  const res = $http.send({
    url: `${API_URL}/${model}:generateContent`,
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
    body: JSON.stringify({
      contents: [{
        role: "user",
        parts: [{ text: config.prompt(course.getString("course_name")) }, ...readFilesAsParts(record)],
      }],
      generationConfig: config.generationConfig,
    }),
  })

  if (res.statusCode !== 200) {
    $app.logger().error("Gemini request failed", "status", res.statusCode, "error", res.json?.error?.message)
    throw geminiError(res.statusCode, model)
  }

  const text = (res.json.candidates?.[0]?.content?.parts ?? []).map((part) => part.text ?? "").join("")
  try {
    return config.result(text)
  } catch (error) {
    $app.logger().error("Unexpected Gemini response", "error", String(error))
    throw new ApiError(502, GENERIC_ERROR)
  }
}

module.exports = { generate }
