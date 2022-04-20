const { Product } = require('../models');

const productData = [
  {
    product_name: 'Maxi Dress',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Wedges Heels',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Curls Hair',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Evening Clutch',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Jewlery',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
