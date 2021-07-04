require('dotenv').config();
const mongoose = require('mongoose');

function connectDB(){
  //database connection
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true});
  const connection = mongoose.connection;

  connection.once('open',function(){
    console.log('Database connected!');
  }).catch(err =>{
    console.log('Connection failed.');
  })
}

module.exports = connectDB;
