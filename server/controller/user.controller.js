const getUser = (req, res) => {
    console.log(req.user);
    const data = {
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        email: req.user.email,
    };
    return res.status(200).json(data);
};

module.exports = {
    getUser,
};
