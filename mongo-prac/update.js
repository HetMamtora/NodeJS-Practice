const {dbConnection} = require('./db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');

        const updatedResult = await collection.updateMany({name:"John"},{$set:{age:15}});

        console.log(updatedResult.modifiedCount);
    }
    catch(error){
        console.error('Upadte Failed: ',error);
    }
}

main()