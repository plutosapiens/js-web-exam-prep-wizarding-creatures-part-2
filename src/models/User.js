const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true 
    },    
    lastName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: [true,'Email is required'],
        unique: true,
    },
    password: { 
        type: String, 
        required: true 
    },
});

userSchema.path('email').validate(async function(value) {
    const emailCount = await mongoose.models.User.countDocuments({ email: value });
    return !emailCount; // Return false if email already exists
}, 'Email must be unique');

userSchema.virtual('repeatPassword').set(function (value) {
    if(value !== this.password){
        throw new Error('Password missmatch!')
    }
});

userSchema.pre('save', async function() {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});

const User = mongoose.model('User', userSchema);
module.exports = User;