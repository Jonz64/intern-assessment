const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

let users = [];

// Routes

// Create a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).send(newUser);
});

// Read all users
app.get('/users', (req, res) => {
    res.status(200).send(users);
});

// Update a user
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    users[id] = updatedUser;
    res.status(200).send(updatedUser);
});

// Delete a user
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.status(204).send();
});

// Serve static files (such as HTML, CSS, and JavaScript)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
