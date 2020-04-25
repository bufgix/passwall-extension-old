const fs = require('fs');
const path = require('path');

const files = ['manifest.json', 'bgscript.js', 'content-script.js'];

function copyFile(file) {
  return new Promise((resolve, reject) => {
    fs.copyFile(
      path.join(process.cwd(), file),
      path.join(process.cwd(), 'dist', file),
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

async function main() {
  try {
    for (let i = 0; i < files.length; i++) {
      await copyFile(files[i]);
    }
  } catch (error) {
    console.error(error);
  }
}

main();
