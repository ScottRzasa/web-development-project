const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Contact.html');
});

app.post('/submit', (req, res) => {
    const data = req.body;
    console.log('Form data:', data);
    res.send('Talk to you soon!');
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:${port}`);
});
