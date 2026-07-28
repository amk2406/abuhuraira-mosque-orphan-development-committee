const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const express = require('express')

const port = 5000
const app = express()
const log = console.log

function randomeByte(length = 2){
   return crypto.randomBytes(length).toString('hex')
}

app.use(express.json(), express.static(path.join(__dirname, 'static')))
app.use(express.static(path.join(__dirname, 'static/')))

app.get('/' , (req , res)=>{
   res.status(200).sendFile(path.join(__dirname, './asset/orphan.html'))
})

app.get('/search' , (req , res)=>{
   res.status(200).sendFile(path.join(__dirname, './asset/orphan-search.html'))
})

app.get('/about' , (req , res)=>{
   res.status(200).sendFile(path.join(__dirname, './asset/orphan-about.html'))
})

app.get('/orphan-request' , (req , res)=>{
   res.status(200).sendFile(path.join(__dirname, './asset/orphan-request.html'))
})

app.use((req, res) =>{
   res.status(404).sendFile(path.join(__dirname, './asset/404.html'))  
})

app.listen(port, () =>{
   log('app started with in port '+ port)
})
