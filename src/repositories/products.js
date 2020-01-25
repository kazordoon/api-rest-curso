const ProductModel = require('../models/product');

module.exports = {
  async getAll() {
    return await ProductModel.find()
  },
  async save(payload) {
    return await ProductModel.create(payload);
  },
  async remove(id) {
    return await ProductModel.findByIdAndDelete(id);
  },
  async find(id) {
    return await ProductModel.findById(id);
  },
  async update(id, payload) {
    return await ProductModel.findByIdAndUpdate(id, payload, { new: true });
  }
};