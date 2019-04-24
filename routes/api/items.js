const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    get all items
// @accsess Public
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create a new Item
// @accsess Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

module.exports = router;