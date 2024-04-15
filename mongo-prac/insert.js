const {dbConnection} = require('./db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');

        const data =[
            {name:"John",age:20},
            {name:"Arthur",age:34},
        ];

        const insertResult = await collection.insertMany(data);
        console.log(`${insertResult} documents inserted`);

    }
    catch(error){
        console.error('Insert Failed: ',error);
    }
}

main();