const express = require('express');
const app = express();
const port =   process.env.PORT || 8000; 
const path = require('path');
const hbs = require('hbs');

// public folder path
const staticPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', '../templates/views');
hbs.registerPartials(partialsPath);
// routing
app.get('/', (req, res) => {
    res.render("index");
})

app.get('/about', (req, res) => {
    res.render("about");
})

app.get('/weather', (req, res) => {
    res.render("weather");
})

app.get('*', (req, res) => {
    res.render("404error", {
        errMsg : "Oops! Page not found"
    });
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});