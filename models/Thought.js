const mongoose = require('mongoose');
//import moment to format the timestamp
const moment = require('moment');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    // set default value to current timestamp
    createdAt: {
        type: Date,
        default: Date.now,
        // use a getter method to format the timestamp on query using moment module
        get: createAtVal => moment(createAtVal).format('MMM DD, YYYY [at] hh:mm a')
    }
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

const thoughtsSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // use a getter method to format the timestamp on query using moment module
        get: createAtVal => moment(createAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    // use reactionSchema to validate data for a reply
    reactions: [reactionSchema]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    },
);

thoughtsSchema
.virtual('reationCount')
.get (function () {
    return this.reactions.length;
})


const Thoughts = mongoose.model('Thoughts', thoughtsSchema);
module.exports = Thoughts;
