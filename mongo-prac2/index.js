const express = require('express');
const app = express();
const {connectToDatabase} = require('./database');


//GET (read) data
app.get('/users',async(req,res) => {
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

//POST (insert) data
app.use(express.json());
app.post('/users',async(req,res) => {
    const db = await connectToDatabase();
    const collection = db.collection('users');

    let result = collection.insertOne(req.body); //passing data through raw JSON in postman
    res.json("Updated");
})

//PUT (update) data
app.put('/users/:name',async(req,res) => {
    const db = await connectToDatabase();
    const collection = db.collection('users');

    //static way
    //let singleData = await collection.updateOne({name:"name-1"},{$set:{name:"updated-name",age:25}});

    //dynamic way
    let singleData = await collection.updateOne({name:req.params.name},{$set:req.body});
    res.send('updated');
})

//DELETE (remove) data
app.delete('/users/:name',async(req,res) => {
    const db = await connectToDatabase();
    const collection = db.collection('users');

    const userName = req.params.name;
    collection.deleteOne({name:userName});
    res.send("Deleted");
})

app.listen(3000,()=> {
    console.log("Server is running on Port:3000")
})