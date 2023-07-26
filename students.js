const { param } = require("express/lib/request");
const mongoose = require("mongoose");
// const validator = require("{validator");
const studentSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
        },
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: Number,
        },
        address: {
            type: String,
        },
        father_name:{
            type:String,
        }
    })
// we create a new collection using model
const Student = new mongoose.model('Student', studentSchema)
module.exports = Student;
