const mongoose = require("mongoose");
//mongodb://username:password@localhost:port/database
const dbURL = "mongodb://localhost/dockerAppDB";

const connect = () => {
    setTimeout(() => mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex: true }), 1000);
}


const dbUri = "mongodb://localhost/dockerAppDB";
mongoose.connect(dbUri, {useNewUrlParser : true});
mongoose.connection.on("connected", () => {
    console.log(`Successful Connection to ${dbUri}`);
});

mongoose.connection.on("error", (error) => {
    console.log("Mongoose connection error :", error);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose is disconnected");
});

connect();