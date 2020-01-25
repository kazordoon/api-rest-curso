const ProductRepository = require('../repositories/products');

function transformer({ id, name, price }) {
	return {
		type: 'products',
		id,
		attributes: {
			name,
			price
		},
		links: {
			self: `/api/v1/products/${id}`
		}
	}
}

module.exports = {
	async getAll(request, h) {
		try {
			const products = await ProductRepository.getAll();
      return h.response({ data: products.map(transformer) });
      
		} catch (err) {
			return h.response({ error: 'Erro ao listar todos os produtos.' }).code(500);
		}
	},
	async find(request, h) {
		try {
			const product = await ProductRepository.find(request.params.id);
      return h.response({ data: transformer(product) });
      
		} catch (err) {
			return h.response({ error: 'Erro ao encontrar o produto.' }).code(400);
		}
	},
	async save(request, h) {
		try {
			const product = await ProductRepository.save(request.payload);
      return h.response({ data: transformer(product) }).code(201);
      
		} catch (err) {
			return h.response({ error: 'Erro ao criar um novo produto.' }).code(400);
		}
	},
	async remove(request, h) {
		try {
			await ProductRepository.remove(request.params.id);
      return h.response().code(204);
      
		} catch (err) {
			return h.response({ error: 'Erro ao tentar remover o produto.' }).code(400);
		}
	},
	async update(request, h) {
		try {
			const product = await ProductRepository.update(request.params.id, request.payload);
			return h.response({ data: transformer(product) });
			
		} catch (err) {
			return h.response({ error: 'Erro ao atualizar o produto.' }).code(400);
		}
	}
}