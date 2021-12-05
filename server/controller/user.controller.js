const User = require('../models/user.model');

// helper functions

const setRole = (r) => (r === 0 ? 'admin' : r === '1' ? 'mentor' : 'user');
const mapUsersList = (users) =>
    users.map((e) => {
        // need update every schema version change
        // TODO:
        // - remove hash
        const { skills, events, passwordHash, ...user } = e.toObject();
        return { ...user, role: setRole(user.role) };
    });

const getUser = async (req, res) => {
    console.log(req.user);
    const data = {
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
    };
    return res.status(200).json(data);
};

const getAllUsers = async (req, res) => {
    const users = await User.find();

    // users.toObject();
    const list = mapUsersList(users);
    res.status(200).json([...list]);
};

/*
    GET USER BY ROLE
    0, 1, 2
*/
const getUserByRole = (roleNumber) => async (req, res) => {
    const users = await User.find({ role: roleNumber.toString() });

    const list = mapUsersList(users);
    res.status(200).json([...list]);
};

module.exports = {
    getUser,
    getAllUsers,
    getAllAdmins: getUserByRole(0),
    getAllMentors: getUserByRole(1),
    getAllMentees: getUserByRole(2),
};
