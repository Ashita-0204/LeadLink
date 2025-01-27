// const mongoose= require ('mongoose');
// // const mongoURL='mongodb+srv://ashita_464:Enchantee_@cluster01.m4pqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01'
// const mongoURL='mongodb://localhost:27017/'

// const mongoDB=async() =>{
//     await mongoose.connect(mongoURL,{ useNewUrlParser :true },async (err,result)=>{
//         if(err) console.log("---",err)
//      else{
//     console.log('connected to database');
//     const fetched_data= await mongoose.connection.db.collection("Sample");
//     fetched_data.find({}).toArray( function(err,data){
//     if(err) console.log(err);
//     else console.log(data);
//     })
// } 
// });

// }
// module.exports=mongoDB;

const mongoose = require('mongoose');

const mongoURL='mongodb://localhost:27017/Tickets';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('Connected to database');

    // Example code to fetch and log data from a collection (optional)
    const fetched_data = await mongoose.connection.db.collection("Tickets").find({}).toArray();
    console.log(fetched_data);
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

module.exports = mongoDB;
