import { withBase } from "vitepress";

const EXTERNAL_PATH_RE = /^(?:[a-z]+:)?\/\//i;
const SPECIAL_PATH_RE = /^(?:#|mailto:|tel:|data:|blob:)/i;

export const useWithBasePath = () => {
  const withBasePath = (path = "") => {
    const normalizedPath = path || "/";
    if (EXTERNAL_PATH_RE.test(normalizedPath) || SPECIAL_PATH_RE.test(normalizedPath)) {
      return normalizedPath;
    }
    return withBase(normalizedPath.startsWith("/") ? normalizedPath : `/${normalizedPath}`);
  };
  return {
    withBasePath,
  };
};
