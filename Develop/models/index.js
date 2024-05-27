// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Product,
    unique: false
  },
})
// Categories have many Products
Categories.hasMany(Product, {
  through: {
    model: Category,
    unique: false
  },
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag, 
    unique: false
  },
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(ProductTag, {
  through: {
    model: ProductTag,
    unique: false
  },
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
