const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jsonwebtoken=require('jsonwebtoken');
// Signup page
module.exports.sign_in = (req, res) => {
  res.render("signin", {});
};

// sign in page
module.exports.signup = (req, res) => {
  res.render("signup", {});
};

// This will create the New user If User Already Exists Then redirect to login page
module.exports.create = async (req, res) => {
  console.log(req.body);

  try {
    const user = await User.find({ email: req.body.email });
    console.log(user);
    if (req.body.password != req.body.confirm_password) {
      console.log("password Mismatch");
      res.render("signup", {});
    } else {
      if (user[0] != null) {
        console.log("User Alrady Exists");
        res.render("signin", {});
      } else {
        // Password Encrypted with bctypt
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass,
          username: req.body.username,
          mobile: req.body.mobile
        });
        res.render("signin", {});

        console.log("user created successfully");
      }
    }

  } catch (error) {
    console.log('error while creating user',error);
  }
};


// forget password page 


module.exports.forget=function(req,res) {

  res.render('forgetpasswor',{
    
  })
  
}

// Login user
module.exports.login= async function(req,res){

  const {email,password}=req.body;
  try {
     const user= await User.findOne({email: email})

     const ismatch= await bcrypt.compare(password,user.password);

     if (!ismatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
 
    const token = jwt.sign(
      user.toJSON(),
      'Rahul',
      {
        expiresIn: "10000",
      }
    );
 
    res.json({ message: "Logged in successfully", token });


  } catch (error) {
    
    console.log('error');
  }
}