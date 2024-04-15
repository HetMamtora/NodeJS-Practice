const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/test-db');

const bookSchema = new mongoose.Schema({
    title:String,
    author:String
});

const Books = mongoose.model('Book', bookSchema);

//GET
app.get('/books',async (req,res) => {
    try{
        const books = await Books.find();
        res.json(books);
    }
    catch(error){
        res.status(500).json({error:'Internal Server Error'});
    }
})

//POST
app.use(express.json()) //Middleware
app.post('/books',async (req,res) => {
    try{
        const {title,author} = req.body;
        const newBook = new Books({title,author});
        await newBook.save();
        res.status(201).json(newBook);
    }
    catch(error){
        res.status(500).json({error:'Internal Server Error'});
    }
})

//PUT
app.put('/books/:id', async(req,res) => {
    const {id} = req.params;
    const {title,author} = req.body;
    const updatedBook = await Books.findByIdAndUpdate(id,{title,author});
    res.json(updatedBook);
})


//DELETE
app.delete('/books/:id',async(req,res) => {
    const {id} = req.params;
    await Books.findByIdAndDelete(id);
    res.sendStatus(204);
})

app.listen(3000,() => {
    console.log('Connection Successful');
});