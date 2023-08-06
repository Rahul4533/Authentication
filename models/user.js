const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
      },
      resetLink: {
        type: String,
        default: ''
      }
},{
    timestamps: true
})

// creating model of user
const user= mongoose.model('user',userSchema)

module.exports=user;
