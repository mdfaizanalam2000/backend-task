const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contacts: [{ type: String }],
})

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;