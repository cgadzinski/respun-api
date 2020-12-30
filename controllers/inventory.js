const inventoryFile = './data/inventory.json';
const fileSystem = require('../helpers/fileSystem');
const getLatestInventory = async () => {
  // todo: blow this away to query a database  
  const data = await fileSystem.readFileContents(inventoryFile);
  return data;
};

module.exports = {
  getLatestInventory
}