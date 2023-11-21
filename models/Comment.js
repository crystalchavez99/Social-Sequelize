const { DataTypes } = require('sequelize');
const {db} = require('../db/connection')
let Comment;

Comment = db.define("Comment", {
    body: DataTypes.STRING,
    createdAt: DataTypes.STRING
})

module.exports = Comment;
