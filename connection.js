const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ms859483:dbuser@cluster0.al0ukog.mongodb.net/students-api",{
    useNewUrlParser:true,
}).then(()=>{
    console.log("Connection is successful");
}).catch((error)=>{
    console.log("No connection");
})