const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                // Return true if email is valid, false otherwise
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

/* will delete the thoughts of the user when deleted
not working as expected
userSchema
.pre('remove', async function(next) {
    try {
        // Remove all thoughts belonging to this user
        await mongoose.model('Thought').deleteMany({ username: this.username });
        next();
    } catch (err) {
        next(err);
    }
});
*/

// virtual get total count of friends on retrieval
userSchema 
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});
// creates the User model using the User schema
const User = mongoose.model('User', userSchema);
module.exports = User;
