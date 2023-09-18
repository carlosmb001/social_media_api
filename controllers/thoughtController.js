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
                res.status(404).json({ message: 'No thought with that ID' })
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create a thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);

            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'Thought has been created but no user with this id!' });
            }
            res.json({ message: 'Thought has been created!' });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    // update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },

    // delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId }
            );
            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json({ message: 'Thought deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create a reaction
    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body } },
                { runValidators: true, new: true }
            );
            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // delete a reaction
    async deleteReaction(req, res) {
        try{
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );
            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json({message: 'Reaction deleted!'});
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
