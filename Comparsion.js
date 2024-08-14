const fs = require("fs");

const path = require("path");

const crypto = require("crypto");

function getFiles(dir) {
  let files = [];

  const items = fs.readdirSync(dir);

  for (let item of items) {
    const fullPath = path.join(dir, item);

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files = files.concat(getFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function computeFileHash(filePath) {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash("sha256");

    const stream = fs.createReadStream(filePath);

    stream.on("data", (chunk) => hash.update(chunk));

    stream.on("end", () => resolve(hash.digest("hex")));

    stream.on("error", (err) => {
      reject(err);
    });
  });
}

async function compareFolders(folder1, folder2) {
  const files1 = getFiles(folder1);

  const files2 = getFiles(folder2);

  const relativePaths1 = files1.map((file) => path.relative(folder1, file));

  const relativePaths2 = files2.map((file) => path.relative(folder2, file));

  const allRelativePaths = new Set([...relativePaths1, ...relativePaths2]);

  for (let relativePath of allRelativePaths) {
    const file1 = path.join(folder1, relativePath);

    const file2 = path.join(folder2, relativePath);

    const fileExistInFolder1 = fs.existsSync(file1);

    const fileExistInFolder2 = fs.existsSync(file2);

    if (fileExistInFolder1 && fileExistInFolder2) {
      const hash1 = await computeFileHash(file1);

      const hash2 = await computeFileHash(file2);

      if (hash1 !== hash2) {
        console.log(`File ${relativePath} is different`);
      }
    } else if (fileExistInFolder1) {
      console.log(`File ${relativePath} is missing in folder2`);
    } else if (fileExistInFolder2) {
      console.log(`File ${relativePath} is missing in folder1`);
    }
  }
}

const folder1 = process.argv[2];

const folder2 = process.argv[3];

if (!folder1 || !folder2) {
  console.log("Usage: node Folder.js <folder1> <folder2>");

  process.exit(1);
}

compareFolders(folder1, folder2).catch((err) => console.error(err));
