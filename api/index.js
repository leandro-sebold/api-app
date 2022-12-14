const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())

const usuarios = [
    {
        id: 1,
        nome: 'Leandro',
        idade: 20
    }
]

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
    const nome = req.body.nome;
    const idade = req.body.idade;

    let id = 1;

    if (usuarios.length > 0) {
        id = usuarios[usuarios.length-1].id+1;
    }

    usuarios.push({
        nome,
        idade,
        id
    });
    res.json(true);
});

app.delete('/usuarios/:id', (req, res) => {
    const idUsuario = Number(req.params.id);
    const indiceUsuario = usuarios.findIndex((usuario) => usuario.id === idUsuario);
    usuarios.splice(indiceUsuario, 1);
    res.json(true);
});

app.listen(4300);