const fs = require('fs');
// Function to read from a file using Promises
function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Function to write to a file using Promises
function writeFilePromise(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

const fileName = 'fileReadWrite.html';
const fileContent = 'Hello, My Name is XOLA BANGAZA';

// Writing to the file using Promises
writeFilePromise(fileName, fileContent)
  .then(() => {
    console.log('File has been written successfully.');
    // Reading from the file using Promises
    return readFilePromise(fileName);
  })
  .then((data) => {
    console.log('File content:');
    console.log(data);

  })
  .catch((err) => {
    console.error('Error occurred:', err);
  });
