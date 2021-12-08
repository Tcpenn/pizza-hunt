const {Schema, model, Types} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReplySchema = new Schema (
    {
        //set custom id value to avoid parent comment id value
        replyId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        replyBody: {
            type: String
        },
        writtenBy: {
            type: String    
        },
        createdBy: {
            type: String,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const CommentSchema = new Schema (
    {
        writtenBy: {
            type: String
        },

        commentBody: {
            type: String
        },

        createdAt: {
            type: String,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        replies: [ReplySchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    },
);

//returns total number of replies
CommentSchema.virtual('replyCount').get(function() {
    return this.replies.length
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;