import apiUrl from "@/services/https/apiUrl";
import qs from "query-string";

export const getFilePath = (relativePath: string) => {
  const parsedQs = qs.parseUrl(relativePath);
  if (!relativePath) {
    return "";
  }
  if (isValidHttpUrl(relativePath) || parsedQs?.query?.localUrl === "true") {
    return relativePath;
  }

  return `${apiUrl.BASE_URL}${relativePath}`;
};

function isValidHttpUrl(url: string) {
  let validUrl;

  try {
    validUrl = new URL(url);
  } catch (_) {
    return false;
  }

  return validUrl.protocol === "http:" || validUrl.protocol === "https:";
}
