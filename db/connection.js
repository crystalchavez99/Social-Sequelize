const { Sequelize } = require("sequelize")
const path = require("path")
let db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
})




module.exports = {
    db,

}
