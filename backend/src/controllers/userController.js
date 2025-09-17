const userService = require('../services/userService');

exports.getUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.json(users);
};

exports.createUser = (req, res) => {
    const { name, email } = req.body;
    const newUser = userService.addUser(name, email);
    res.status(201).json(newUser);
};
