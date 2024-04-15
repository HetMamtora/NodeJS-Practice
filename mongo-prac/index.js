const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'test-db';

async function main(){
    await client.connect();
    console.log('Connected Successfully to Server');

    const db = client.db(dbName);
    const collection = db.collection('users');

    const findResult = await collection.find().toArray();
    console.log(findResult);
}

main();