const express = require("express");
const router = express.Router();
const Employee = require("./models/EmployeeSchema");

// Create an employee
router.post('/addEmployee', async (req, res) => {
    const { name, contacts } = req.body;

    const employee = new Employee({ name, contacts });

    try {
        const savedEmployee = await employee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while creating the employee.');
    }
})

// List employees with pagination
router.get('/employees', async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit) : 5;

    try {
        const response = await Employee.find().skip((page - 1) * limit).limit(limit).exec();
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching employees.');
    }
})

// Update an employee
router.put('/updateEmployee/:id', async (req, res) => {
    const { id } = req.params;
    const { name, contacts } = req.body;

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, { name, contacts }, { new: true });
        res.json(updatedEmployee);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while updating the employee.');
    }
})

// Delete an employee
router.delete('/deleteEmployee/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await Employee.findOneAndDelete(id);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while deleting the employee.');
    }
})

// Get an employee by ID
router.get('/getEmployee/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const response = await Employee.findById(id);
        if (!response) {
            res.status(404).send('Employee not found.');
        }
        else {
            res.json(response);
        }

    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching the employee.');
    }
})

module.exports = router;