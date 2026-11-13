import fs from "fs";
import path from "path";

const destDir = path.resolve("public/content/case-studies");
fs.mkdirSync(destDir, { recursive: true });
const src =
  "C:/Users/rohan/.cursor/projects/c-Projects-Stelora/assets/image-9ccda24c-54a4-4bf7-8e4e-cc1a6544cd59.jpg";
const dest = path.join(destDir, "case-studies-reference.jpg");
fs.copyFileSync(src, dest);
console.log("ok", fs.statSync(dest).size);
