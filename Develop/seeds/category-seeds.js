const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Dresses',
  },
  {
    category_name: 'Shoes',
  },
  {
    category_name: 'Hair',
  },
  {
    category_name: 'Bags',
  },
  {
    category_name: 'Jewelries',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
