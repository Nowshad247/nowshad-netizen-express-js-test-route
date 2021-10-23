const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("this is res from Hello");
})
const users = [
    {
        "id": 0,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    },
    {
        "id": 1,
        "name": "beanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    },
    {
        "id": 2,
        "name": "aeanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    }
]
app.get('/user', (req, res) => {
    const search = req.query.search;
    if (search) {
        const result = users.filter(user => user.name.includes(search));
        res.send(result)
    } else {
        res.send(users)
    }
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(users[id]);
})
app.post('/user', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);

})
app.listen(port, () => {
    console.log('port is listenting ', port)
})