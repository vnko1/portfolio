import fs from "fs";
import path from "path";

export const sleep = (ms: number): Promise<void> =>
  new Promise((res) => setTimeout(res, ms));

export const getAllRoutes = (dir = "app", basePath = ""): string[] => {
  const fullPath = path.join(process.cwd(), dir);
  const files = fs.readdirSync(fullPath, { withFileTypes: true });

  let routes: string[] = [];
  for (const file of files) {
    if (file.isDirectory()) {
      routes = [
        ...routes,
        ...getAllRoutes(path.join(dir, file.name), `${basePath}/${file.name}`),
      ];
    } else if (file.name === "page.tsx" || file.name === "page.js") {
      routes.push(basePath || "/");
    }
  }

  return routes;
};
