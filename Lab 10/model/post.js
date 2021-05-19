const {Schema, model} = require("mongoose");

const PostSchema = Schema ({

    title: String,
    author: String,
    post_data: String,
    post_date: {
        type: Date,
        default: Date.now()
    }
});


module.exports = model('posts', PostSchema);