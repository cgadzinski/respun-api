const assert = require('assert');
const expect = require('chai').expect;
const sinon = require('sinon');
const inventory = require('./../controllers/inventory');
const fileSystem = require('../helpers/fileSystem');

const mockInventory = require('./mocks/inventory.json');

describe('Inventory', () => {
  beforeEach(() => {
    sinon.stub(fileSystem, 'readFileContents').returns(mockInventory);
  });
  it('should return all the inventory when called', async () => {
    const response = await inventory.getLatestInventory();
    console.log(fileSystem.readFileContents());
    expect(response).to.deep.equal(mockInventory);
    expect(response.length).to.equal(5);
  });
})