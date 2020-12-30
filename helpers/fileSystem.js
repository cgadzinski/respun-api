const fs = require('fs');

const readFileContents = async (filePath) => {
  const content = await fs.promises.readFile(filePath, { encoding: 'utf-8' });
  return JSON.parse(content);
}

module.exports = {
  readFileContents
};