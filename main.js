
const express = require("express")
const app = express()
app.use(express.static("estilos"))
app.get("/", function(req,res){
    res.sendFile(__dirname +"/src/home.html")
})
app.get("/comoJogar", function(req,res){
    res.sendFile(__dirname +"/src/comoJogar.html")
})
app.get("/contato", function(req,res){
    res.sendFile(__dirname +"/src/contato.html")
})
app.get("/historia", function(req,res){
    res.sendFile(__dirname +"/src/historia.html")
})
app.get("/jogo", function(req,res){
    res.sendFile(__dirname + "/src/jogo.html")
})
app.listen(8080)