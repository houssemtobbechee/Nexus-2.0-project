const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.post('/contact', (req, res) => {
    const fullName = req.body.full_name;
    const email = req.body.email;
    const message = req.body.message;

    console.log(`Received contact form submission: ${fullName}, ${email}, ${message}`);

    res.send('Form submission received!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
