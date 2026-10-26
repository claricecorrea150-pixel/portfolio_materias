import express from 'express'
import cors from 'cors'

const servidor = express()
servidor.use(express.json())
servidor.use(cors())

servidor.get('/', (req, res) => {
    res.send('Olá! A API está funcionando corretamente.')
})

const materias = []

servidor.get('/materias', (req, res) => {
    res.send(materias)
})

servidor.post('/materias', (req, res) => {
    const materia = req.body

    if (!materia.nome || !materia.professor) {
        return res.status(400).send('Preencha o nome e o professor!')
    }

    materias.push(materia)

    res.status(201).send('matéria cadastrada!')
})

servidor.listen(3000, () => { console.log('deu bom') })