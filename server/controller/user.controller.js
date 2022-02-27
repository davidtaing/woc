const User = require('../models/user.model');

const getUser = async (req, res) => {
     console.log(req.user);
    const data = {
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
        skills: req.user.skills,
        
        //TODO: add phone number, linkedin URL in database
    };
    return res.status(200).json(data);
};

// const updateUser = async(req, res) => {
//     
//     // get data to here..
    
//     const res = await User.updateOne({ name: req.user.firstName },
//     { lastName: req.user.lastName});

//     const user = await User.find();

// }

const getAllUsers = async (req, res) => {
    const users = await User.find();
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
    getAllUsers,
};
