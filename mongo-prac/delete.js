const {dbConnection} = require('./db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');

        const filter = {name:'John'};
        const deletedResult = await collection.deleteMany(filter);

        console.log(deletedResult.deletedCount);
    }
    catch(error){
        console.error('Delete Failed: ',error);
    }
};

main()