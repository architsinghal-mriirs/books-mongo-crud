const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String
})

const Book = mongoose.model('Book', bookingSchema )

module.exports = Book