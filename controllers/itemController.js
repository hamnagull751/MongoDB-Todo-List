const Item = require('../models/item');
// Get all items
exports.getItems = async (req, res) => {
try {
const items = await Item.find();
res.json(items);
} catch (err) {
console.error(err.message);
res.status(500).send('Server Error');
}
};
// Get a single item by id
exports.getItem = async (req, res) => {
try {
const item = await Item.findById(req.params.id);
if (!item) {
return res.status(404).json({ msg: 'Item not found' });
}
res.json(item);
} catch (err) {
console.error(err.message);
if (err.kind === 'ObjectId') {
return res.status(404).json({ msg: 'Item not found' });
}
res.status(500).send('Server Error');
}
};
// Create a new item
exports.createItem = async (req, res) => {
const { name } = req.body;
try {
const newItem = new Item({
name
});
const item = await newItem.save();
res.json(item);
} catch (err) {
console.error(err.message);
res.status(500).send('Server Error');
}
};
// Update an item
exports.updateItem = async (req, res) => {
const { name } = req.body;
try {
let item = await Item.findById(req.params.id);
if (!item) {
return res.status(404).json({ msg: 'Item not found' });
}
item = await Item.findByIdAndUpdate(
req.params.id,
{ $set: { name } },
{ new: true }
);
res.json(item);
} catch (err) {
console.error(err.message);
if (err.kind === 'ObjectId') {
return res.status(404).json({ msg: 'Item not found' });
}
res.status(500).send('Server Error');
}
};
// Delete an item
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Item not found' });

    await Item.findByIdAndDelete(req.params.id); // or findByIdAndRemove
    res.json({ msg: 'Item removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};