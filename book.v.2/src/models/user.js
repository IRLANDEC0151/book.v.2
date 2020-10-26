const { Schema, model } = require("mongoose");
const userSchema = new Schema({
    email: {
        type: String,
        unique:true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: String,
    userName: String,
    userLink: [],
    placeId: {
        type: Schema.Types.ObjectId,
        ref: "Place",
    },
    books: [
        {
            type: Schema.Types.ObjectId,
            ref: "Book",
        },
    ],
    favoriteBooks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Book",
        },
    ],
});

module.exports = model("User", userSchema);
