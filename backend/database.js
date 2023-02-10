const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1/project" //IPv4 // mongodb://localhost:27017 IPv6
mongoose.set('strictQuery', true); //for deprecating function error solution


const connectToMango = () => {
    mongoose.connect(mongoURI,)
        .then(() => { console.log(`successfully connected to MongoDB`) })
        .catch((error) => { console.log(`not connected to MongoDB : ${error}`) })
}

module.exports = connectToMango;