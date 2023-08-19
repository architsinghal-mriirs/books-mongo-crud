const express = require('express')
const mongoose = require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://architsrocks:Qr5H1AdSCpwT9zN1@zypher-mongo-cluster-1.ww9fght.mongodb.net/?retryWrites=true&w=majority";
const bodyParser = require('body-parser')
const booksRouter = require('./routes/book')



const PORT = 3000

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', (req, res)=>{
    res.send("Hello this is king")
})
app.use('/books', booksRouter)
app.listen(PORT,()=>{
    console.log("Listening on port number", PORT)
})

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

