const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        commentContent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        underscored: true,
        timestamps: true, // This will automatically create `createdAt` and `updatedAt` fields
    }
);

module.exports = Comment;
