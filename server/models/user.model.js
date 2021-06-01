const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    role: {
        type: String,
        required: false,
        default: 2, // default user unless set
    },
    passwordHash: {
        type: String,
        required: true,
    },
    gender: { type: String, require: true },
    nationality: { type: String, require: true },
    about: { type: String, require: false },
    skills: { type: Array, require: false },
    events: { type: Array, require: false },
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
