// Import the necessary modules and JSON data
import express from 'express'; // Using ES module syntax for importing Express
import data from './data/sample.json' assert { type: 'json' }; // Importing the JSON data with assertion for handling JSON files

// Initialize the Express app
const app = express(); // Creating an instance of the Express application
const PORT = 3000; // Defining the port number the server will listen to

// ------------------------- Home Page Route -------------------------

// Route: Home page
// URL: http://localhost:3000/
// This route serves a simple welcome message for the home page
app.get('/', (req, res) => {
  res.send('<h1>Learning about JSON API</h1>'); // Sending a basic HTML message as a response
});

// ------------------------- About Page Route -------------------------

// Route: About page
// URL: http://localhost:3000/about
// This route serves information about the Express framework
app.get('/about', (req, res) => {
  res.send("<h1>About Express</h1>"); // Sending an HTML response describing Express
});

// ------------------------- Learn Page Route -------------------------

// Route: Learn page
// URL: http://localhost:3000/learn
// This route serves educational content about Express.js
app.get('/learn', (req, res) => {
  res.send("<h1>Learn the essentials of Express JS</h1>"); // Sending a message to encourage learning about Express
});

// ------------------------- Students Data Route -------------------------

// Route: students data
// URL: http://localhost:3000/students
// This route sends back the student data (from the imported JSON file) in JSON format
app.get('/students', (req, res) => {
  res.json(data); // Sending the imported JSON data directly as the response
});

// ------------------------- Start the server -------------------------

// Start the server and listen for requests on the specified port
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // Log a message when the server starts successfully
});
