const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const express = require('express')
const cors = require('cors')
const webview = require('webview')

const port = 5000
const app = express()
const log = console.log

function randomeByte(length = 2){
   return crypto.randomBytes(length).toString('hex')
}

app.use(cors(), express.json(), express.static('./static'))

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
   webview.spawn({
   // options for webview
      title: "Abuhuraira Mosque Orphan Foundation",
      width: 1024,
      icon: "http://127.0.0.1:5000/logo.png",
      height: 768,
      url: "http://127.0.0.1:5000/",
   });
})
log(webview.exec)