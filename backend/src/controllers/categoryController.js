const Category = require("../models/Category");

const allCategories = async(req, res) => {
    try {
        const users = await Category.find({}, { password: 0 });
        res.status(201).send({
            success: true,
            message: 'Category list fetched successfully',
            count: users.length,
            users
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error fetching category list: ${error.message}`,
            error
        });
    }
}

const storeCategory = async(req, res) => {
    try {
        const { name, email } = req.body;
        const user = await Category.create({ name, email });

        res.status(201).send({
            success: true,
            message: 'Category created successfully',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error creating category: ${error.message}`,
            error
        });
    }
}

const singleCategory = async(req, res) => {
    try {
        const userId = req.params.id;
        const user = await Category.findById(userId);

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Category not found'
            });
        }

        res.status(201).send({
            success: true,
            message: 'Category fetched successfully',
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Error fetching category: ${error.message}`,
            error
        });
    }
}

const updateCategory = async(req, res) => {
    try {
        const userId = req.params.id;
        const { name, email } = req.body;
        const user = await Category.findByIdAndUpdate(userId, { name, email }, { new: true });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Category not found'
            });
        }

        res.status(201).send({
            success: true,
            message: 'Category updated successfully',
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

const deleteCategory = async(req, res) => {
    try {
        const userId = req.params.id;
        const user = await Category.findByIdAndDelete(userId);

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

module.exports = { allCategories, storeCategory, updateCategory, singleCategory, deleteCategory }