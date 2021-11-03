const express = require('express')
const app = express()
const port = 3000

// You can require your own code as well...
const funcs = require('./src/funcs.js')

// Tell Express to server HTML, JS, CSS etc from the public/ folder
// See: http://expressjs.com/en/starteru/static-files.html
app.use(express.static('public'))

// Our API routes will be here
app.post('/api/LogIn', function (req, res) {
  // Return the response by calling our function
  res.send(funcs.myFunction());
  console.log(req.body)

  res.json({
    username: "grenes",
    user_id: 1
})
})

// Tell us where we're running from
console.log("Server running on http://localhost:" + port)
app.listen(port)
