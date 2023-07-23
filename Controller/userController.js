const User = require("../models/user");

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
      if (user[0]!=null) {
        console.log("User Alrady Exists");
        res.render("signin", {});
      } else {
        User.create(req.body);
        res.render("signin", {});

        console.log("user created successfully");
      }
    }

    25;
  } catch (error) {
    console.log(error);
  }
};
