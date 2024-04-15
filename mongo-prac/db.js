const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'test-db';

const dbConnection = async () => {
    try{
        await client.connect();
        console.log('Connected Successfully');
        const db = client.db(dbName);
        return db;
    }
    catch(error){
        console.error('Failed to Connect to server: ',error);
        throw error;
    }
}

module.exports = {dbConnection};