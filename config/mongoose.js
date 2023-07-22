const mongoose=require('mongoose')
//connecting to dataBase
mongoose.connect('mongodb://localhost:27017/User')

const db=mongoose.connection;
//success message
db.once('open',()=>{
    console.log('Connected to DataBase SuccessFully')
})


module.exports=db;