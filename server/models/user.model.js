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
        default: 2,
    },
    passwordHash: {
        type: String,
        required: true,
    },
});

// ok should i set up mongoose hooks

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const valid = await bcrypt.compare(password, user.password);

    return valid;
};

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
