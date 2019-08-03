const Sequelize = require('sequelize')

const PersonaModel = require('./models/Persona')

const DBURL = 'mysql://root:root@localhost:3306/agenda_api'

const sequelize = new Sequelize(DBURL)

const Persona = PersonaModel(sequelize, Sequelize)

sequelize.sync()
.then(()=> {
    console.log('Tabelas criadas');
    
})

module.exports ={ Persona }