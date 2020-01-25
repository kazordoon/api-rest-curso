const productHandler = require('./handlers/product');

const BASE_URL = '/api/v1/products';

module.exports = [
  {
    method: 'GET',
    path: BASE_URL,
    handler: productHandler.getAll
  },
  {
    method: 'GET',
    path: `${BASE_URL}/{id}`,
    handler: productHandler.find
  },
  {
    method: 'POST',
    path: BASE_URL,
    handler: productHandler.save
  },
  {
    method: 'DELETE',
    path: `${BASE_URL}/{id}`,
    handler: productHandler.remove,
    options: {
      cors: true
    }
  }
]