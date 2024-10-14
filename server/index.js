const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:3000', // Make sure to match the client's origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Ensure these methods are allowed
  credentials: true, // If you're sending cookies or HTTP authentication
}));

app.use(express.json())

db.sequelize.sync().then(()=>{
  app.listen(4000, ()=>{
    console.log('server is running on port 4000')
  })
})


const routeUser = require('./routes/User')
app.use('/user', routeUser)

const routerpost = require('./routes/Post')
app.use('/post', routerpost)
