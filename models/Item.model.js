const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  item: { type: String, required: true, trim: true },
  quantity: { type: Number, required: true },
  unitValue: { type: Number },
});

const ItemModel = model("Item", itemSchema);

module.exports = ItemModel;
