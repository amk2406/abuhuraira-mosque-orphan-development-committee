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
function setCache(req, res, next){
   const oneDay = 3 * 24 * 60 * 60 * 1000;
   res.setHeader('Expires', new Date(Date.now() + oneDay).toUTCString());
   next()
}

app.use(express.json())
app.use(express.static(path.join(__dirname, 'static/')))
app.use(setCache)

app.get('/' , (req , res)=>{
   res.status(200).sendFile(path.join(__dirname, './asset/orphan.html'))
})

app.get('/search' , (req , res)=>{
   res.status(200).sendFile(path.join(__dirname, './asset/orphan-search.html'))
})
console.log(path.join(__dirname))
app.get('/about' , (req , res)=>{
   res.status(200).sendFile(path.join(__dirname, './asset/orphan-about.html'))
})

app.get('/logo.png' , (req , res)=>{
   res.status(200).sendFile(path.join(__dirname, './static/logo.png'))
})

tatus(200).sendFile(path.join(__dirname, './asset/orphan-request.html'))
})

app.use((req, res) =>{
   res.status(404).sendFile(path.join(__dirname, './asset/404.html'))  
})

app.listen(port, '0.0.0.0', () =>{
   log('app started with in port '+ port)
})
