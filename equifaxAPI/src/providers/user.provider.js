const User = require('../models/user.model');

const UserProvider = {};


UserProvider.findUsers = async() => {

    let users;

    try {

        users = await User.find();
        console.log("res provider :", users);
        return users


    } catch (err) {

        throw err;

    }


};

UserProvider.newUser = async(req, res) => {

    console.log("hola entrando");
    const { email, name, edad } = req.body;

    if (!email || !name) {
        return res.status(400).json({ msg: 'Email o nombre incorrectos' });
    }

    const user = await User.findOne({ email: email });
    if (user) {
        return res.status(400).json({ msg: 'Este email ya se encuentra registrado' });
    }

    const newUser = new User({ email, name, edad });
    await newUser.save();

    return res.status(200).json(newUser);

};

UserProvider.deleteUser = async(req, res) => {

    const id = req.params.id;

    user = await User.findById({ _id: id });

    if (user) {
        userDelete = await User.findByIdAndDelete({ _id: id });
        res.status(201).json(userDelete);
    }

    return res.status(400).json({ msg: 'Users dont exists' });
};

module.exports = UserProvider;