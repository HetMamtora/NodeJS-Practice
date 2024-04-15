const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'test-db';
const client = new MongoClient(url);

const connectToDatabase = async() => {
    try{
        await client.connect();
        console.log("Connected Successfully");

        const db = client.db(dbName);
        return db;
    }
    catch(error){
        console.error(error);
    }
};

module.exports = {connectToDatabase};