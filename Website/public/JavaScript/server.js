
const express = require("express");
const path = require("path");
const fileupload = require('express-fileupload');

let initial_path = path.join(__dirname, '../');

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "/HTML/blog.html"));
    // res.sendFile("C:/Users/craig/Documents/GitHub/CraigSau.github.io/Website/HTML/blog.html");
});

app.listen('3000', () => {
    console.log('Server started on port 3000!');
});