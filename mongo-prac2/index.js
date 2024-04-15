const express = require('express');
const app = express();
const {connectToDatabase} = require('./database');


//GET (read) data
app.get('/',async(req,res) => {
    try{
        const db = await connectToDatabase();
        const collection = db.collection('users');
        const users = await collection.find().toArray();
        res.json(users);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error:'Internal Server Error'});
    }
})

app.listen(3000,()=> {
    console.log("Server is running on Port:3000")
})