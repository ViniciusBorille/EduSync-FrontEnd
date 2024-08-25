const express=require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('Edusync')
})


router.get('/login', (req,res) => {
    res.send('Login')
})

router.get('/cadastro', (req,res) => {
    res.send('Cadastro')
})

module.exports=router