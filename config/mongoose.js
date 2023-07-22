const mongoose=require('mongoose')
//connecting to dataBase
mongoose.connect('mongodb://127.0.0.1:27017/User',{
    useNewUrlParser: true,

    useUnifiedTopology: true,

    family: 4,
})

const db=mongoose.connection;
//success message
db.once('open',()=>{
    console.log('Connected to DataBase SuccessFully')
})


module.exports=db;