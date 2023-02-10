const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
    user:        { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    url:         { type: String, required: true },
    title:       { type: String, required: true },
    description: { type: String },
    fevicon:     { type: String },
})

const Item = mongoose.model('item', ItemSchema);
module.exports = Item;