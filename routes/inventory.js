const router = require('express').Router();
const inventoryController = require('./../controllers/inventory');
// const { catchErrors } = require('./../helpers/errorHandlers');

router.get('/', async (req, res, next) => {
  try {
    const data = await inventoryController.getLatestInventory();
    res.json(data)
  } catch(err) {
    const error = new Error(err);
    next(error);
  }
});

module.exports = router;