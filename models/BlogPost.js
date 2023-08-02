const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {
    
  }
  BlogPost.init(
    {
      blogtitle: {
        type: DataTypes.STRING,
      },
      blogcontent: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      underscored: true,
    }
  );
  
  module.exports = BlogPost;