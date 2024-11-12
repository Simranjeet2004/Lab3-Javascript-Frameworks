// Import Express using ES Module syntax
import express from 'express';
// Import the sample JSON data (student data)
import data from './data/sample.json' assert { type: 'json' };

// Initialize the Express app
const app = express(); 
const PORT = 3000;

// Middleware to parse JSON request bodies for POST and PUT requests
app.use(express.json());

// ------------------------- GET - Retrieve all students -------------------------

// Endpoint to get all students
// URL: http://localhost:3000
app.get("/", (req, res) => {
  // Send the student data as a JSON response
  res.json(data); 
});

// ------------------------- POST - Create a new student -------------------------

// Endpoint to create a new student
// URL: http://localhost:3000/students
app.post('/students', (req, res) => {
    // Extract the new student data from the request body
    const newStudent = req.body;
    
    // Add the new student to the existing data
    data.push(newStudent);
    
    // Send a response with a success message and the created student
    res.status(201).json({ message: 'Student created', student: newStudent });
});

// ------------------------- PUT - Update an existing student by ID -------------------------

// Endpoint to update a student by their ID
// URL: http://localhost:3000/students/:id
app.put('/students/:id', (req, res) => {
    // Parse the student ID from the URL parameters
    const studentId = parseInt(req.params.id);
    
    // Find the index of the student with the matching ID
    const studentIndex = data.findIndex(std => std.id === studentId);

    if (studentIndex !== -1) {
        // Update the student data by merging the existing data with the new data from the request body
        data[studentIndex] = { ...data[studentIndex], ...req.body };
        
        // Send a response with the updated student data
        res.json({ message: 'Student updated', student: data[studentIndex] });
    } else {
        // If the student was not found, send a 404 error
        res.status(404).json({ message: 'Student not found' });
    }
});

// ------------------------- DELETE - Delete a student by ID -------------------------

// Endpoint to delete a student by their ID
// URL: http://localhost:3000/students/:id
app.delete('/students/:id', (req, res) => {
    // Parse the student ID from the URL parameters
    const studentId = parseInt(req.params.id);
    
    // Find the index of the student with the matching ID
    const studentIndex = data.findIndex(std => std.id === studentId);

    if (studentIndex !== -1) {
        // Delete the student from the data array
        const deletedStudent = data.splice(studentIndex, 1);
        
        // Send a response with the deleted student data
        res.json({ message: 'Student deleted', student: deletedStudent[0] });
    } else {
        // If the student was not found, send a 404 error
        res.status(404).json({ message: 'Student not found' });
    }
});

// ------------------------- Start the server -------------------------

// Start the Express server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
