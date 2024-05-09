const mongoose=require('mongoose');


const db=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/expensetracker");
        console.log('MongoDB connected succesfully');
    }
    catch(error){
        console.log('DB connection Error');
    }
}

module.exports={db}