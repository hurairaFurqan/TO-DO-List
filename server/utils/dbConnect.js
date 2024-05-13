require("dotenv").config();
const mongoose = require("mongoose");
module.exports = () => {
    mongoose.connect("mongodb+srv://hurairaFurqan:2K4A8eJkLGrc3H6M@mernstack.qicdj5n.mongodb.net/");
    const db = mongoose.connection;
    db.on("error", (error) => console.log(error));

    db.once("open", () => console.log("connected to database"));
}