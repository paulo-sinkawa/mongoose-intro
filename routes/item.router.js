const router = require("express").Router();

const ItemModel = require("../models/Item.model");

router.post("/create-item", async (req, res) => {
  try {
    const newItem = await ItemModel.create(req.body);
    return res.status(200).json(newItem);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/all-item", async (req, res) => {
  try {
    const allItems = await ItemModel.find();
    return res.status(200).json(allItems);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ItemModel.findOne({ _id: id });
    return res.status(200).json(item);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const editedItem = await ItemModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res.status(201).json(editedItem);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await ItemModel.deleteOne({ _id: id });
    return res.status(201).json(deleteItem);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
