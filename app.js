const express = require('express')

const app = express()
const port = 3000

app.use(express.json())

let nomes = []

app.get('/nomes', (req,res) => {
  res.json()
  nomes.push({nome, email})
})

app.post('/nomes', (req, res) => {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({ error: "erro" });
    };

    const novoNome = { id: nomes.length + 1, nome, email }
    nomes.push(novoNome)
    res.status(201).json(novoNome)
});

app.listen(port, () => {
    console.log("servidor", port)
})