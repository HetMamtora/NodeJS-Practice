const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
})

const UserModel = mongoose.model('users',UserSchema);

const main = async() => {
    await mongoose.connect('mongodb://localhost:27017/test-db');
    console.log('Connected to MongoDB Server');

    const newData = new UserModel({
        name:'John',
        age:65
    });

    await newData.save();
    console.log('Data added successfully');
}

main();