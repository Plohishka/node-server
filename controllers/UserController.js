const User = require('../models/User');

module.exports.createUser = (req, res) => {
    const { body } = req;
    const user = new User(body);
    user.addUser();
    res.status(201).send(user);
}

module.exports.getAllUsers = (req, res) => {
    const users = User.findAll();
    res.status(200).send(users);
}

module.exports.getOneUser = (req, res) => {
    const { userId } = req.params;
    const user = User.findOne(Number(userId));
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(404).end();
    }
}

module.exports.deleteSomeUser = (req, res) => {
    const { userId } = req.params;
    const user = User.findOne(Number(userId));
    if (user) {
        user.deleteUser();
        res.send(user);
    } else {
        res.status(404).end();
    }
}

module.exports.updateUser = (req, res) => {
    const { body, params: { userId } } = req;
    const user = User.findOne(Number(userId));

    if (user) {
        user.updateUser(body);
        res.status(200).end();
    } else {
        res.status(404).end();
    }
}