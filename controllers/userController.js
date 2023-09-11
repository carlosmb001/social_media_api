const { User, Thought } = require('../models')

module.exports = {
    //get all users
    async getUser(req, res) {
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //get one user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne();
            res.status(200).json(user);

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' })
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //get create a new user 
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            // use create method
            res.status(200).json(newUser);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    //update a user
    async updateUser(req, res) {
        
    },

    //delete a user
    async deleteUser(req, res) {

    },

    //add a friend
    async addFriend(req, res) {

    },

    //delete a friend
    async deleteFriend(req, res) {

    },

};