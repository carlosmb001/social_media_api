const { User, Thought } = require('../models')


module.exports = {

// get Thoughts
async getThought(req, res) {
    try {
        const thought = await Thought.find();
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},

// get single thought
async getSingleThought(req, res) {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');
        if (!thought) {
            return res.status(404).json({ message: 'No thought with that ID' })
        }
        res.json(thought);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
},

// create a thought
async createThought(req, res){
},

// update a thought
async updateThought(req, res){
},

// delete a thought
async deleteThought(req, res) {
},

// create a reaction
async createReaction(req, res) {
},

// delete a reaction
async deleteReaction(req, res) {
},
    
};
