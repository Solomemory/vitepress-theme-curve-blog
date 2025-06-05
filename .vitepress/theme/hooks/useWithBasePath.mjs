import { withBase } from "vitepress";

export const useWithBasePath = () => {
  const withBasePath = (path) => {
    if (path.startsWith("http") || path.startsWith("https")) {
      return path;
    }
    path ||= "/";
    return withBase(path);
  };
  return {
    withBasePath,
  };
};
