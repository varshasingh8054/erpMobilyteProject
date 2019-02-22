const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({

    firstName: {
        type: String,
        required : true
    },

    lastName: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
        unique : true
    },
    password :{
        type: String,
        required : true
    } ,
    active: {
        type: Boolean,
        defaultValue: false,
        required : true
    },
    token: String,
    date: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
   
     
});
const User=module.exports=mongoose.model('User',UserSchema);

module.exports.getUserById=function(id,callback)
{
    User.findById(id,callback);
}

module.exports.getUserByEmail=function(email,callback)
{
    const query={email: email};
    User.findOne(query, callback);
}

module.exports.addUser= function(newUser, callback)
{
    bcrypt.genSalt(10,(err,salt) =>{
        bcrypt.hash(newUser.password, salt, (err, hash) =>
        {
            if(err) throw err;
            newUser.password= hash;
            newUser.save(callback);
        });
    });
 
    console.log(newUser.active);
}


module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
  }
  

 
