const User = require('../models/user.model');
const logging = require('../config/logging');

const NAMESPACE = "CTR_USER"

// TODO: add validation
const getUser = async (req, res) => {
    const user = await User.findById(req.body.id);
    if(user) {
        return res.status(200).json(user);
    } else {
        logging.error(NAMESPACE, `error fetching user userid: ${req.body.id}`)
        return res.status(400).json({ message: 'error fetching user'})
    }
}

// const updateUser = async(req, res) => {
//     
//     // get data to here..
//     const res = await User.updateOne({ name: req.user.firstName },
//     { lastName: req.user.lastName});

//     const user = await User.find();

// }

// TODO: update to 
const getAllUsersRole = async (req, res) => {
    // TODO: change role to text
    // these are just bandaid for numbers
    // not working as expected
    const setRole = (r) => (r === 0 ? 'admin' : r === '1' ? 'mentor' : 'user');

    const users = req.body.role ? await User.find({ role: req.body.role }) : await User.find();
    console.log(req.body.role)


    // users.toObject();
    const list = users.map((e) => {
        const u = e.toObject();
        const { skills, events, passwordHash, ...user } = u;

        return { ...user, role: setRole(u.role) };
    });

    res.status(200).json([...list]);
};


// TODO: add validation
/*
    to be safe remove
    __v
    passwordHash
    role
    mentor
    mentees
    _id
*/
const update = async (req, res) => {
    let user = await User.findById(req.body.id);
    if(!user) {
        logging.error(namespace, `error fetching user userid: ${req.body.id}`)
        return res.status(400).json({ message: 'error fetching user'})
    }

    // removing data that should not be updated
    // will also be handled by validation BUT layers
    const newUser = req.body.user;
    if("__v" in newUser) delete newUser.__v;
    if("passwordHash" in newUser) delete newUser.passwordHash;
    if("role" in newUser) delete newUser.role;
    if("mentor" in newUser) delete newUser.mentor;
    if("mentees" in newUser) delete newUser.mentees;
    if("_id" in newUser) delete newUser._id;

    user = {...user._doc,...newUser};

    try {
        await user.save();
        return res.status(200).json({ message: "user update complete" })
    } catch(err) {
        return res.status(400).json({ message: 'error updating details', err})
    }
} 

// TEST: 6224941fe571d638a125ef3f
// TODO: add validation
const updateRole = async (req, res) => {
    // put this in default or somewhere
    const user = await User.findById(req.body.id);
    if(!user) {
        logging.error(namespace, `error fetching user userid: ${req.body.id}`)
        return res.status(400).json({ message: 'error fetching user'})
    }

    user.role = req.body.role;

    try {
        await user.save();
        return res.status(200).json({ message: "role update complete" })
    } catch(err) {
        return res.status(400).json({ message: 'error updating role', err})
    }
} 

module.exports = {
    getUser,
    getAllUsersRole,
    update,
    updateRole
};
