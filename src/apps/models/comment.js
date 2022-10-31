const mongoose = require("../../common/database")();

const commentSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Types.ObjectId,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    prd_id:{
        type : mongoose.Types.ObjectId,
        required : true,
    },
    body:{
        type : String,
        required : true,
    },
    full_name:{
        type: String,
        required : true,
    },

},{ timestamps : true});
const CommentModel = mongoose.model("Comment", commentSchema, "comments");
module.exports = CommentModel;