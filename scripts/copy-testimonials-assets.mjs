import fs from "fs";
import path from "path";

const destDir = path.resolve("public/content/testimonials");
fs.mkdirSync(destDir, { recursive: true });

const pairs = [
  {
    src: "C:/Users/rohan/.cursor/projects/c-Projects-Stelora/assets/image-036debb7-4d53-4ff7-8987-83575f02ee53.png",
    dest: path.join(destDir, "testimonials-hero-studio.png"),
  },
  {
    src: "C:/Users/rohan/.cursor/projects/c-Projects-Stelora/assets/image-51e97864-14b1-49c1-8639-c0e4ea02ae63.jpg",
    dest: path.join(destDir, "testimonials-reference.jpg"),
  },
];

for (const { src, dest } of pairs) {
  fs.copyFileSync(src, dest);
  const size = fs.statSync(dest).size;
  console.log(`OK ${path.basename(dest)} ${size}`);
}
