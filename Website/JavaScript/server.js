
const express = require("express");
const app = express();
// app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile("C:/Users/craig/Documents/GitHub/CraigSau.github.io/index.html");
    // res.sendFile("C:/Users/craig/Documents/GitHub/CraigSau.github.io/CSS/base-style.css");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: craigsauers@ymail.com");
});

app.listen(3000, function (){
    console.log("Server started on port 3000");
});

 


