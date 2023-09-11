const { User , Thought } = require('../models')

module. exports = {
//get all users
async getUser (req, res) {
    try {
        const userData = await User.find();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
},
//get one user
async getSingleUser (req, res) {
    
},
//get create a new user 
async createUser (req, res){
    const user = new User ({
        username: req.body.username,
        email: req.body.email
    })
    try {
        const newUser = await User.save();
        // use create method
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json(err);
    }
},
//update a user
async updateUser (req, res){
    
},

//delete a user
async deleteUser (req, res) {

},

//add a friend
async addFriend (req, res) {
    
},

//delete a friend
async deleteFriend (req, res) {

},

};