const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    contacts: {
        primary: {
            name: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            relation: {
                type: String,
                required: true
            }
        },
        secondary: {
            name: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            relation: {
                type: String,
                required: true
            }
        }
    }
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;