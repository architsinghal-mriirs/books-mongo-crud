const express = require('express')
const router = express.Router()
const Book = require('../models/book')

//route with controller function
router.post('/createBook', async (req,res) => {
    try{
        const { title, author, genre } = req?.body
        console.log("This is the request body", JSON.stringify(req?.body, null, 2))
        const book = new Book({title, author, genre}) //maybe handle case when body has no values
        await book.save()
        res.status(201).json({
            message: 'Succesfully created a book',
            data: book,
        })
    }catch(err) {
        console.log("Error from Create Book", err)
        res.status(400).json({
            message: err?.message ?? 'Error while creating the book'
        })
    }
})

router.get('/getAllBooks', async (req,res) => {
    try{
        const allBooksData = await Book.find()
        res.status(200).json(allBooksData)

    }catch(err){
        console.log("Error from get all books", err)
        res.status(400).json({
            message: err?.message ?? 'Error while fetching all books'
        })
    }
})


module.exports = router