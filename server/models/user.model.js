const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/*
    required
    - first, last, email, password
*/
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: false,
    },
    linkedinUrl:{
        type: String,
        required: false,
    },
    role: {
        type: String,
        required: false,
        default: 2, // default user unless set
    },
    passwordHash: {
        type: String,
        required: true,
    },
    gender: { type: String, require: false }, // fix form to require
    about: { type: String, require: false },
    skills: { type: Array, require: false },
    mentor: { type: Object, require: false },
    mentees: { type: [Object], require: false},
    job: { type: String, require: false, default: ""},
    company: { type: String, require: false, default: ""},
    // display image
});

// ok should i set up mongoose hooks
UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const valid = await bcrypt.compare(password, user.password);

    return valid;
};

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
