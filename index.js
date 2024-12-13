const express = require("express")
const app = express()


app.set("view engine", "ejs")
app.use(express.static("public"))

//pour les heures
app.use((req, res, next) => {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
        next(); 
    } else {
        res.send("<h1>Le site est accessible uniquement du lundi au vendredi, de 9h à 17h.</h1>");
    }
})

app.get("/", (req,res) => {
    res.render('home')
})

app.get('/service', (req, res) => {
    res.render('service')
})

app.get('/contact', (req, res) => {
    res.render('contact');
})




app.listen(3000, () => console.log("Serveur lancer au port 3000"))