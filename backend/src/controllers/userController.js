const User = require("../models/User");

const allUsersController = async(req, res) => {
    try {
        const users = await User.find();
        res.status(201).send({
            success: true,
            message: 'User list fetched successfully',
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

module.exports = { allUsersController }