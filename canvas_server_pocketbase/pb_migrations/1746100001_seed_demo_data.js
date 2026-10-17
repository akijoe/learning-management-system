/// <reference path="../pb_data/types.d.ts" />
// Anonymized demo data. Every demo user's password is DEMO_PASSWORD, the
// superuser is admin@example.com / DEMO_ADMIN_PASSWORD. Course material PDFs
// are read from ../pb_seed (next to pb_data).
const DEMO_PASSWORD = "asdf1234"
const DEMO_ADMIN_PASSWORD = "admin12345"

const DATA = {
  "courses": [
    {
      "id": "LMS-SZGREG",
      "course_name": "Számítógépes rendszerek",
      "course_type": "inf",
      "credits": 5,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "1"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [],
      "exams": [
        "3rp3dd08jnr64gw"
      ]
    },
    {
      "id": "LMS-PROGEG",
      "course_name": "Programozás",
      "course_type": "inf",
      "credits": 6,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "1"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [],
      "exams": []
    },
    {
      "id": "LMS-IMPROGEG",
      "course_name": "Imperatív programozás",
      "course_type": "inf",
      "credits": 5,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "1"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [],
      "exams": []
    },
    {
      "id": "LMS-FUNPEG",
      "course_name": "Funkcionális programozás",
      "course_type": "inf",
      "credits": 5,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "1"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [],
      "exams": []
    },
    {
      "id": "LMS-MATAG",
      "course_name": "Matematikai alapok",
      "course_type": "mat",
      "credits": 4,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "1"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [],
      "exams": []
    },
    {
      "id": "LMS-TMKG",
      "course_name": "Egyetemi alapozó és tanulásmódszertani kurzus",
      "course_type": "egyéb",
      "credits": 1,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "1"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [],
      "exams": []
    },
    {
      "id": "LMS-PNYEG",
      "course_name": "Programozási nyelvek",
      "course_type": "inf",
      "credits": 6,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "2"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [],
      "exams": []
    },
    {
      "id": "LMS-OEPROGEG",
      "course_name": "Objektumelvű programozás",
      "course_type": "inf",
      "credits": 6,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "2"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-PROGEG"
      ],
      "exams": []
    },
    {
      "id": "LMS-WF1EG",
      "course_name": "Web-fejlesztés",
      "course_type": "inf",
      "credits": 3,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "2"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-SZGREG"
      ],
      "exams": []
    },
    {
      "id": "LMS-AA1E",
      "course_name": "Algoritmusok és adatszerkezetek I EA",
      "course_type": "szám",
      "credits": 2,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "2"
      ],
      "exams_maximum_attempts": 3,
      "prerequisites": [
        "LMS-MATAG",
        "LMS-AA1G"
      ],
      "exams": [
        "612c3y91335jx51",
        "0skfzd0fedb9ths"
      ]
    },
    {
      "id": "LMS-AA1G",
      "course_name": "Algoritmusok és adatszerkezetek I Gy",
      "course_type": "szám",
      "credits": 3,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "2"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-MATAG",
        "LMS-PROGEG"
      ],
      "exams": []
    },
    {
      "id": "LMS-DM1E",
      "course_name": "Diszkrét matematika I",
      "course_type": "mat",
      "credits": 2,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "2"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [],
      "exams": []
    },
    {
      "id": "LMS-DM1G",
      "course_name": "Diszkrét matematika I",
      "course_type": "mat",
      "credits": 2,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "2"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-MATAG"
      ],
      "exams": []
    },
    {
      "id": "LMS-AN1E",
      "course_name": "Analízis I",
      "course_type": "mat",
      "credits": 2,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "2"
      ],
      "exams_maximum_attempts": 2,
      "prerequisites": [
        "LMS-MATAG"
      ],
      "exams": [
        "w65413492299ifz",
        "ki9it7co5hq0n71"
      ]
    },
    {
      "id": "LMS-AN1G",
      "course_name": "Analízis I",
      "course_type": "mat",
      "credits": 2,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "2"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-MATAG"
      ],
      "exams": []
    },
    {
      "id": "LMS-AA2E",
      "course_name": "Algoritmusok és adatszerkezetek II",
      "course_type": "szám",
      "credits": 2,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "3"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-AA1E"
      ],
      "exams": []
    },
    {
      "id": "LMS-AA2G",
      "course_name": "Algoritmusok és adatszerkezetek II",
      "course_type": "szám",
      "credits": 3,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "3"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-AA1E"
      ],
      "exams": []
    },
    {
      "id": "LMS-OPREG",
      "course_name": "Operációs rendszerek",
      "course_type": "inf",
      "credits": 3,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "4"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-SZGREG"
      ],
      "exams": []
    },
    {
      "id": "LMS-AB1E",
      "course_name": "Adatbázisok I",
      "course_type": "inf",
      "credits": 2,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "4"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-AA2E"
      ],
      "exams": []
    },
    {
      "id": "LMS-AB1G",
      "course_name": "Adatbázisok I",
      "course_type": "inf",
      "credits": 2,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "4"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-AA2E"
      ],
      "exams": []
    },
    {
      "id": "LMS-KPROGEG",
      "course_name": "Konkurrens programozás",
      "course_type": "inf",
      "credits": 3,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "5"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-PNYEG"
      ],
      "exams": []
    },
    {
      "id": "LMS-TKHE",
      "course_name": "Telekommunikációs hálózatok",
      "course_type": "inf",
      "credits": 2,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "5"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [],
      "exams": []
    },
    {
      "id": "LMS-TKHG",
      "course_name": "Telekommunikációs hálózatok",
      "course_type": "inf",
      "credits": 3,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "5"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-OEPROGEG"
      ],
      "exams": []
    },
    {
      "id": "LMS-MIAE",
      "course_name": "Mesterséges intelligencia",
      "course_type": "szám",
      "credits": 3,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "5"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-AA2E"
      ],
      "exams": []
    },
    {
      "id": "LMS-JIE",
      "course_name": "Jogi ismeretek",
      "course_type": "egyéb",
      "credits": 3,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "5"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [],
      "exams": []
    },
    {
      "id": "LMS-PWMEG",
      "course_name": "Innovatív vállalkozás menedzsment",
      "course_type": "egyéb",
      "credits": 3,
      "mandatory_in_spec": [
        "A",
        "B",
        "C"
      ],
      "recommended_sem": [
        "1",
        "6"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [],
      "exams": []
    },
    {
      "id": "LMS-aEVALKEG",
      "course_name": "Eseményvezérelt alkalmazások",
      "course_type": "inf",
      "credits": 5,
      "mandatory_in_spec": [
        "A"
      ],
      "recommended_sem": [
        "3"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-OEPROGEG"
      ],
      "exams": []
    },
    {
      "id": "LMS-cWEBPROGEG",
      "course_name": "Webprogramozás",
      "course_type": "inf",
      "credits": 4,
      "mandatory_in_spec": [
        "C"
      ],
      "recommended_sem": [
        "3"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-WF1EG"
      ],
      "exams": []
    },
    {
      "id": "LMS-cPROGTEG",
      "course_name": "Programozási technológia",
      "course_type": "inf",
      "credits": 5,
      "mandatory_in_spec": [
        "C"
      ],
      "recommended_sem": [
        "3"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-OEPROGEG"
      ],
      "exams": []
    },
    {
      "id": "LMS-bPREG",
      "course_name": "Programozáselmélet Gy",
      "course_type": "szám",
      "credits": 3,
      "mandatory_in_spec": [
        "B"
      ],
      "recommended_sem": [
        "3"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-MATAG"
      ],
      "exams": []
    },
    {
      "id": "LMS-bPREE",
      "course_name": "Programozáselmélet EA",
      "course_type": "szám",
      "credits": 2,
      "mandatory_in_spec": [
        "B"
      ],
      "recommended_sem": [
        "3"
      ],
      "exams_maximum_attempts": 2,
      "prerequisites": [
        "LMS-bPREG"
      ],
      "exams": [
        "q2062ls2981alp2"
      ]
    },
    {
      "id": "LMS-aDM2G",
      "course_name": "Diszkrét matematika II",
      "course_type": "mat",
      "credits": 3,
      "mandatory_in_spec": [
        "A",
        "B"
      ],
      "recommended_sem": [
        "3"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-DM1E"
      ],
      "exams": []
    },
    {
      "id": "LMS-KVSZKBIZTE",
      "course_name": "Kiberbiztonság alapjai EA",
      "course_type": "szám",
      "credits": 4,
      "mandatory_in_spec": [],
      "recommended_sem": [
        "2"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-WF1EG"
      ],
      "exams": []
    },
    {
      "id": "LMS-KVPNY1EG",
      "course_name": "Programozási nyelvek (C++)",
      "course_type": "inf",
      "credits": 5,
      "mandatory_in_spec": [],
      "recommended_sem": [
        "3"
      ],
      "exams_maximum_attempts": 0,
      "prerequisites": [
        "LMS-IMPROGEG"
      ],
      "exams": []
    }
  ],
  "users": [
    {
      "id": "18370hj64poc9j5",
      "email": "test@example.com",
      "name": "Teszt Elek",
      "role": "student",
      "specialisation": "B",
      "courses": [
        "LMS-aEVALKEG",
        "LMS-MIAE"
      ],
      "completed_courses": [
        "LMS-TMKG"
      ]
    },
    {
      "id": "s70x7ob3ydb172x",
      "email": "test2@example.com",
      "name": "Hallgató Henrik",
      "role": "student",
      "specialisation": "C",
      "courses": [
        "LMS-cPROGTEG",
        "LMS-DM1E",
        "LMS-WF1EG",
        "LMS-FUNPEG",
        "LMS-aDM2G",
        "LMS-AN1E",
        "LMS-AN1G",
        "LMS-bPREG",
        "LMS-bPREE"
      ],
      "completed_courses": [
        "LMS-OPREG",
        "LMS-cWEBPROGEG",
        "LMS-TMKG",
        "LMS-IMPROGEG",
        "LMS-AA1E",
        "LMS-AA1G",
        "LMS-KVSZKBIZTE",
        "LMS-KVPNY1EG",
        "LMS-MATAG"
      ]
    },
    {
      "id": "KI28AH",
      "email": "test3@example.com",
      "name": "Példa Péter",
      "role": "student",
      "specialisation": "",
      "courses": [],
      "completed_courses": []
    },
    {
      "id": "TE4CH3",
      "email": "teacher@example.com",
      "name": "Tanár Tamás",
      "role": "teacher",
      "specialisation": "",
      "courses": [],
      "completed_courses": []
    },
    {
      "id": "253ja90q6aas4ld",
      "email": "teacher2@example.com",
      "name": "Második Tanár",
      "role": "teacher",
      "specialisation": "A",
      "courses": [
        "LMS-KVSZKBIZTE",
        "LMS-aDM2G"
      ],
      "completed_courses": [
        "LMS-aDM2G",
        "LMS-bPREE"
      ]
    }
  ],
  "results": [
    {
      "id": "733g8vz7ai1nsy6",
      "student": "s70x7ob3ydb172x",
      "judge": "TE4CH3",
      "result": 1,
      "comment": "nem sikerült"
    },
    {
      "id": "3814j1q4692tj3i",
      "student": "s70x7ob3ydb172x",
      "judge": "TE4CH3",
      "result": 5,
      "comment": "Gratulálok!"
    },
    {
      "id": "r8crba841gz25ak",
      "student": "s70x7ob3ydb172x",
      "judge": "253ja90q6aas4ld",
      "result": 5,
      "comment": "Gratulálok!"
    },
    {
      "id": "h4383o20co6fix8",
      "student": "KI28AH",
      "judge": "253ja90q6aas4ld",
      "result": 4,
      "comment": "Gratulálok!"
    },
    {
      "id": "ly9008jc5fu7q3f",
      "student": "KI28AH",
      "judge": "253ja90q6aas4ld",
      "result": 3,
      "comment": "Rendben."
    },
    {
      "id": "20l4zjg0chclw19",
      "student": "KI28AH",
      "judge": "253ja90q6aas4ld",
      "result": 3,
      "comment": "Rendben."
    },
    {
      "id": "60z7sc6cinz23t3",
      "student": "18370hj64poc9j5",
      "judge": "253ja90q6aas4ld",
      "result": 4,
      "comment": "szép munka"
    },
    {
      "id": "1twna658h8gkbz1",
      "student": "18370hj64poc9j5",
      "judge": "253ja90q6aas4ld",
      "result": 4,
      "comment": "szép munka"
    },
    {
      "id": "51agg061328m4nx",
      "student": "18370hj64poc9j5",
      "judge": "253ja90q6aas4ld",
      "result": 2,
      "comment": "Javítható."
    },
    {
      "id": "t3i1b6913r2pgxt",
      "student": "KI28AH",
      "judge": "253ja90q6aas4ld",
      "result": 5,
      "comment": "Kiváló munka!"
    }
  ],
  "exams": [
    {
      "id": "ki9it7co5hq0n71",
      "days": 50,
      "semester": "24/25/2",
      "location": "A épület 0.307",
      "maximum_participants": 100,
      "participants": [],
      "results": [
        "733g8vz7ai1nsy6",
        "3814j1q4692tj3i"
      ],
      "judges": []
    },
    {
      "id": "w65413492299ifz",
      "days": 56,
      "semester": "24/25/2",
      "location": "B épület 2.101",
      "maximum_participants": 100,
      "participants": [],
      "results": [],
      "judges": [
        "TE4CH3",
        "253ja90q6aas4ld"
      ]
    },
    {
      "id": "q2062ls2981alp2",
      "days": 58,
      "semester": "24/25/2",
      "location": "A épület 1.105",
      "maximum_participants": 50,
      "participants": [],
      "results": [],
      "judges": [
        "TE4CH3",
        "253ja90q6aas4ld"
      ]
    },
    {
      "id": "612c3y91335jx51",
      "days": 62,
      "semester": "24/25/2",
      "location": "C épület 0.12",
      "maximum_participants": 3,
      "participants": [
        "KI28AH",
        "18370hj64poc9j5"
      ],
      "results": [
        "r8crba841gz25ak",
        "20l4zjg0chclw19",
        "60z7sc6cinz23t3",
        "1twna658h8gkbz1",
        "51agg061328m4nx",
        "t3i1b6913r2pgxt"
      ],
      "judges": [
        "TE4CH3",
        "253ja90q6aas4ld"
      ]
    },
    {
      "id": "0skfzd0fedb9ths",
      "days": 70,
      "semester": "24/25/2",
      "location": "B épület 3.210",
      "maximum_participants": 32,
      "participants": [],
      "results": [],
      "judges": []
    },
    {
      "id": "3rp3dd08jnr64gw",
      "days": 72,
      "semester": "24/25/2",
      "location": "Online (Teams)",
      "maximum_participants": 10,
      "participants": [],
      "results": [],
      "judges": []
    }
  ],
  "instances": [
    {
      "id": "ythlzcd625a75nq",
      "course": "LMS-bPREE",
      "teacher": "TE4CH3",
      "students": [
        "KI28AH",
        "18370hj64poc9j5",
        "253ja90q6aas4ld"
      ],
      "description": "<h2>Előad&aacute;sok &eacute;s gyakorlatok anyagai</h2>\r\n<p><a href=\"https://bzsr.web.elte.hu/progelm/\">https://bzsr.web.elte.hu/progelm/</a></p>\r\n<h2>K&ouml;vetelm&eacute;nyek</h2>\r\n<p>(R&eacute;szletesen az előad&aacute;s Canvas-oldal&aacute;n)</p>\r\n<p><strong>+/- dolgozatok:</strong></p>\r\n<ul>\r\n<li>Minden &oacute;ra elej&eacute;n p&aacute;r percben</li>\r\n<li>Az előad&aacute;son előfordul&oacute; defin&iacute;ci&oacute;kb&oacute;l</li>\r\n<li>8 legjobban siker&uuml;lt erdem&eacute;nye nemnegat&iacute;v</li>\r\n<li>Igazolatlan hi&aacute;nyz&aacute;s m&iacute;nusznak sz&aacute;m&iacute;t</li>\r\n</ul>\r\n<p><strong>Pluszpontok:</strong></p>\r\n<ul>\r\n<li>&Oacute;ra k&ouml;zbeni k&eacute;rd&eacute;s(ek) helyes megold&aacute;s&aacute;val szerezhetők</li>\r\n<li>Legjobb 8 sz&aacute;m&iacute;t</li>\r\n<li>(Sikeres) ZH pontsz&aacute;maihoz ad&oacute;dnak hozz&aacute;</li>\r\n</ul>\r\n<p><strong>ZH:</strong></p>\r\n<ul>\r\n<li>2 ZH lesz a f&eacute;l&eacute;vben, ezek időpontja az előad&aacute;s Canvas fel&uuml;let&eacute;n</li>\r\n<li>A m&aacute;sodik ZH-n legal&aacute;bb el&eacute;gs&eacute;ges eredm&eacute;nyt kell el&eacute;rni (20 pont)</li>\r\n<li>Ponthat&aacute;rok:\r\n<ul>\r\n<li>1: 0 - 19</li>\r\n<li>2: 20 - 29</li>\r\n<li>3: 30 - 39</li>\r\n<li>4: 40 - 49</li>\r\n<li>5: 50 - 60</li>\r\n</ul>\r\n</li>\r\n</ul>\r\n<p><strong>Gyakorlati jegy:&nbsp;</strong>(ZH1 pontsz&aacute;ma + ZH2 pontsz&aacute;ma + pluszpontok) / 20</p>",
      "active_semester": "2024/25/2",
      "time_table": "Péntek 10:00-12:00",
      "max_students": 10,
      "files": [
        "eloadas_kivonat_9.pdf",
        "eloadas_kivonat_3.pdf",
        "eloadas_kivonat_2.pdf",
        "eloadas_kivonat_1.pdf"
      ]
    },
    {
      "id": "0i2we76b5b0m00k",
      "course": "LMS-bPREE",
      "teacher": "253ja90q6aas4ld",
      "students": [
        "KI28AH",
        "s70x7ob3ydb172x"
      ],
      "description": "<h2>Előad&aacute;sok &eacute;s gyakorlatok anyagai</h2>\r\n<p><a href=\"https://bzsr.web.elte.hu/progelm/\">https://bzsr.web.elte.hu/progelm/</a></p>\r\n<h2>K&ouml;vetelm&eacute;nyek</h2>\r\n<p>(R&eacute;szletesen az előad&aacute;s Canvas-oldal&aacute;n)</p>\r\n<p><strong>+/- dolgozatok:</strong></p>\r\n<ul>\r\n<li>Minden &oacute;ra elej&eacute;n p&aacute;r percben</li>\r\n<li>Az előad&aacute;son előfordul&oacute; defin&iacute;ci&oacute;kb&oacute;l</li>\r\n<li>8 legjobban siker&uuml;lt erdem&eacute;nye nemnegat&iacute;v</li>\r\n<li>Igazolatlan hi&aacute;nyz&aacute;s m&iacute;nusznak sz&aacute;m&iacute;t</li>\r\n</ul>\r\n<p><strong>Pluszpontok:</strong></p>\r\n<ul>\r\n<li>&Oacute;ra k&ouml;zbeni k&eacute;rd&eacute;s(ek) helyes megold&aacute;s&aacute;val szerezhetők</li>\r\n<li>Legjobb 8 sz&aacute;m&iacute;t</li>\r\n<li>(Sikeres) ZH pontsz&aacute;maihoz ad&oacute;dnak hozz&aacute;</li>\r\n</ul>\r\n<p><strong>ZH:</strong></p>\r\n<ul>\r\n<li>2 ZH lesz a f&eacute;l&eacute;vben, ezek időpontja az előad&aacute;s Canvas fel&uuml;let&eacute;n</li>\r\n<li>A m&aacute;sodik ZH-n legal&aacute;bb el&eacute;gs&eacute;ges eredm&eacute;nyt kell el&eacute;rni (20 pont)</li>\r\n<li>Ponthat&aacute;rok:\r\n<ul>\r\n<li>1: 0 - 19</li>\r\n<li>2: 20 - 29</li>\r\n<li>3: 30 - 39</li>\r\n<li>4: 40 - 49</li>\r\n<li>5: 50 - 60</li>\r\n</ul>\r\n</li>\r\n</ul>\r\n<p><strong>Gyakorlati jegy:&nbsp;</strong>(ZH1 pontsz&aacute;ma + ZH2 pontsz&aacute;ma + pluszpontok) / 20</p>",
      "active_semester": "2024/25/2",
      "time_table": "Csütörtök 8:00-10:00",
      "max_students": 10,
      "files": [
        "eloadas_kivonat_3.pdf",
        "eloadas_kivonat_2.pdf",
        "eloadas_kivonat_1.pdf"
      ]
    },
    {
      "id": "vwm7s3hass6i34j",
      "course": "LMS-WF1EG",
      "teacher": "TE4CH3",
      "students": [],
      "description": "<h2>Web-fejlesztés</h2><p>A kurzus a kliensoldali webfejlesztés alapjait mutatja be: HTML, CSS és JavaScript, a DOM kezelése és az eseménykezelés.</p><h2>Követelmények</h2><ul><li>Félévközi beadandó feladat</li><li>Gyakorlati zárthelyi a félév végén</li></ul><p>A tananyag lent, a Fájlok között érhető el.</p>",
      "active_semester": "24/25/2",
      "time_table": "Szerda 12:00-14:00",
      "max_students": 10,
      "files": [
        "webprogramozas_kliens.pdf"
      ]
    },
    {
      "id": "82y7x422l9h9md6",
      "course": "LMS-AN1E",
      "teacher": "253ja90q6aas4ld",
      "students": [
        "s70x7ob3ydb172x"
      ],
      "description": "<h2>Analízis I előadás</h2><p>Valós számok, sorozatok és sorok konvergenciája, függvények határértéke és folytonossága.</p><h2>Követelmények</h2><p>Az előadás vizsgával zárul; a vizsgára a gyakorlati jegy megszerzése után lehet jelentkezni.</p>",
      "active_semester": "24/25/2",
      "time_table": "",
      "max_students": 10,
      "files": [
        "01_ea_an1_2023_tavasz.pdf"
      ]
    },
    {
      "id": "8m087af5e0e97h1",
      "course": "LMS-AA1G",
      "teacher": "TE4CH3",
      "students": [],
      "description": "<h2>Algoritmusok és adatszerkezetek I gyakorlat</h2><p>A gyakorlaton az előadáson tanult algoritmusokat (rendezések, verem, sor, láncolt listák, fák) feladatokon keresztül gyakoroljuk.</p><h2>Követelmények</h2><ul><li>Két zárthelyi dolgozat</li><li>Órai aktivitás pluszpontokért</li></ul>",
      "active_semester": "24/25/2",
      "time_table": "",
      "max_students": 10,
      "files": [
        "algo1.pdf"
      ]
    },
    {
      "id": "s885t0220g96w85",
      "course": "LMS-AA1E",
      "teacher": "TE4CH3",
      "students": [
        "s70x7ob3ydb172x"
      ],
      "description": "<h2>Algoritmusok és adatszerkezetek I előadás</h2><p>Műveletigény, rendező algoritmusok, alapvető adatszerkezetek és bináris fák.</p><h2>Követelmények</h2><p>Írásbeli vizsga az előadásjegyzet anyagából.</p>",
      "active_semester": "24/25/2",
      "time_table": "",
      "max_students": 10,
      "files": [
        "algo1.pdf"
      ]
    }
  ]
}

migrate((app) => {
  const DAY = 24 * 60 * 60 * 1000
  const seedDir = $filepath.join(app.dataDir(), "..", "pb_seed")
  const save = (collection, fields) => {
    const record = new Record(app.findCollectionByNameOrId(collection))
    for (const [key, value] of Object.entries(fields)) record.set(key, value)
    app.save(record)
    return record
  }

  const admin = new Record(app.findCollectionByNameOrId("_superusers"))
  admin.set("email", "admin@example.com")
  admin.set("password", DEMO_ADMIN_PASSWORD)
  app.save(admin)

  // Courses first without their self/exam relations, filled in at the end.
  for (const { prerequisites, exams, ...course } of DATA.courses) save("courses", course)

  for (const user of DATA.users) {
    save("users", { ...user, password: DEMO_PASSWORD, verified: true, emailVisibility: true })
  }

  for (const result of DATA.results) save("exam_results", result)

  for (const { days, ...exam } of DATA.exams) {
    const time = new Date(Date.now() + days * DAY)
    time.setUTCHours(10, 0, 0, 0)
    save("exams", { ...exam, time: time.toISOString().replace("T", " ") })
  }

  for (const course of DATA.courses) {
    const record = app.findRecordById("courses", course.id)
    record.set("prerequisites", course.prerequisites)
    record.set("exams", course.exams)
    app.save(record)
  }

  for (const { files, ...instance } of DATA.instances) {
    save("course_instance", {
      ...instance,
      files: files.map((name) => $filesystem.fileFromPath($filepath.join(seedDir, name))),
    })
  }
}, (app) => {
  for (const [collection, items] of [
    ["course_instance", DATA.instances], ["exams", DATA.exams], ["exam_results", DATA.results],
    ["users", DATA.users], ["courses", DATA.courses],
  ]) {
    for (const { id } of items) {
      try { app.delete(app.findRecordById(collection, id)) } catch (_) {}
    }
  }
  try { app.delete(app.findAuthRecordByEmail("_superusers", "admin@example.com")) } catch (_) {}
})
