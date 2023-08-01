const mongoose=require('mongoose')
//connecting to dataBase
mongoose.connect('mongodb+srv://Rahul4533:4533rahul@rahul.pfskwld.mongodb.net/user',{
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