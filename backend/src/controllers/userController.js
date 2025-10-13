const User = require("../models/User");

const allUsers = async(req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        res.status(201).send({
            success: true,
            message: 'User list fetched successfully',
            count: users.length,
            users
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error fetching user list: ${error.message}`,
            error
        });
    }
}

const storeUser = async(req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.create({ name, email });

        res.status(201).send({
            success: true,
            message: 'User created successfully',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error creating user: ${error.message}`,
            error
        });
    }
}

const singleUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found'
            });
        }

        res.status(201).send({
            success: true,
            message: 'User fetched successfully',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error fetching user: ${error.message}`,
            error
        });
    }
}

const updateUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const { name, email } = req.body;
        const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found'
            });
        }

        res.status(201).send({
            success: true,
            message: 'User updated successfully',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error updating user: ${error.message}`,
            error
        });
    }
}

const deleteUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'User not found'
            });
        }

        res.status(201).send({
            success: true,
            message: 'User deleted successfully',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error deleting user: ${error.message}`,
            error
        });
    }
}

module.exports = { allUsers, storeUser, updateUser, singleUser, deleteUser }