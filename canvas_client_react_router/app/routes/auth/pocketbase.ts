// lib/pocketbase.ts
import PocketBase, { type RecordModel } from "pocketbase";

const pb = new PocketBase('http://127.0.0.1:8090');

// Course files are protected, so a link needs a short-lived token. It's fetched
// on click, a token put in the page would expire before the link gets used.
export async function openProtectedFile(record: RecordModel, filename: string) {
  const tab = window.open("", "_blank");
  const token = await pb.files.getToken();
  const url = pb.files.getURL(record, filename, { token });

  // tab is null when a popup blocker stopped it
  (tab ?? window).location.href = url;
}

export default pb;
