// Imnportação de pacotes
const express = require('express')
const path = require('path')



//Preparação de ambiente
const app = express()
const basePath = path.join(__dirname)
app.use(express.static('static'))
app.set('view engine', 'ejs')


//Rotas
app.get('/', (req,res) => {
    res.render(`index`)
})




app.listen(3000, console.log("Servidor está rodadno através de http://localhost:3000"))


