const express = require('express');
const router = express.Router();
const {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
} = require('../controllers/itemController');
// Get all items
router.get('/', getItems);
// Get a single item
router.get('/:id', getItem);
// Create a new item
router.post('/', createItem);
// Update an item
router.put('/:id', updateItem);
// Delete an item
router.delete('/:id', deleteItem);
module.exports = router;