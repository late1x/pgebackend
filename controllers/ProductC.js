import Product from '../models/ProductM.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al obtener los productos' });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al obtener el producto' });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, brand, supplier, quantity } = req.body;

  try {
    const product = await Product.create({ name, price, brand, supplier, quantity });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al crear el producto' });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, brand, supplier, quantity } = req.body;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      product.name = name;
      product.price = price;
      product.brand = brand;
      product.supplier = supplier;
      product.quantity = quantity;
      await product.save();
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al actualizar el producto' });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      res.json({ message: 'Producto eliminado correctamente' });
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocurrió un error al eliminar el producto' });
  }
};
