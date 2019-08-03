module.exports = (sequelize, type) => {
    const Persona = sequelize.define('persona', {
        nome: {
            type: type.STRING
        },
        sobrenome: {
            type: type.STRING
        },
        telefone: {
            type: type.STRING
        }
        },{
            timestamps: true
        })
        return Persona
}