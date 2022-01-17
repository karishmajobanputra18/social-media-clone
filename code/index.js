
const bodyParser = require('body-parser') 
const express = require('express')
const app = express()
const port = 3000
   
// You can require your own code as well..
const funcs = require('./src/funcs.js')
const users = require('./src/users.js')
const posts = require('./src/posts.js')

const {request}=require('express')

// Tell Express to server HTML, JS, CSS etc from the public/ folder
// See: http://expressjs.com/en/starteru/static-files.html
app.use(express.static('public'))
app.use(express.json())
app.use(bodyParser.json());
 app.post('/api/LogIn',(req, res) => {
     //check what is sent from form 
     let username = req.body.username
     let password = req.body.password
    
     users.login(username,password,result=>{
       if(!result){
         result=false
       }
       let data={username:result.username}
       console.log(data)
       res.json(data)
       
       
     })
   

   })

// Tell us where we're running from
console.log("Server running on http://localhost:" + port)
app.listen(port)
