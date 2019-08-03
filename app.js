const app = require('express')()
const port = 3000

const {Persona} = require('sequelize')

app.get('/personas', (req, res)=> {
    res.send('GET Personas !!!!')
})

app.post('/personas/novo', (req, res)=> {
    res.send('POST Personas !!!!')
})

app.get('/personas/:id', (req, res)=> {
    res.send('GET Personas/:id !!!!')
})

app.put('/personas/:id', (req, res)=> {
    res.send('PUT Personas/:id !!!!')
})


app.delete('/personas/:id', (req, res)=> {
    res.send('DELETE Personas/:id !!!!')
})

app.listen(port, () =>{
    console.log("Servidor rodando na porta: ${port}")
})
