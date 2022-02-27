const User = require('../models/user.model');
const logging = require('../config/logging');

const NAMESPACE = "CTR_USER"

// TODO: add validation
const getUser = async (req, res) => {
    const user = await User.findById(req.body.id)
    if(user) {
        return res.status(200).json(user);
    } else {
        logging.error(NAMESPACE, `error fetching user userid: ${req.body.id}`)
        return res.status(400).json({ message: 'error fetching user'})
    }
};

// const updateUser = async(req, res) => {
//     
//     // get data to here..
    
//     const res = await User.updateOne({ name: req.user.firstName },
//     { lastName: req.user.lastName});

//     const user = await User.find();

// }

const getAllUsersRole = async (req, res) => {
    const users = req.body.role ? await User.find({ role: req.body.role }) : await User.find();

    const setRole = (r) => (r === 0 ? 'admin' : r === '1' ? 'mentor' : 'user');

    // users.toObject();
    const list = users.map((e) => {
        const u = e.toObject();
        const { skills, events, passwordHash, ...user } = u;

        return { ...user, role: setRole(user.role) };
    });

    res.status(200).json([...list]);
};

module.exports = {
    getUser,
    getAllUsersRole,
};
