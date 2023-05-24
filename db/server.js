const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/CRUDAPI";

mongoose.connect(uri).then(() => {
    console.log("Connected to DB");
}).catch((error) => {
    console.log("Couldn't connect to DB");
})