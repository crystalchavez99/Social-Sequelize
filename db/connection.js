const { Sequelize } = require("sequelize")

let db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite')
})




module.exports = {
    db,

}
