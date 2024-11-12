// Import the Express module for setting up the server
import express from 'express'; // Use the 'import' syntax for ES modules

// Initialize an Express application instance
const app = express();
const port = 3000;// Define the port on which the server will listen

// -------------------- Home Route --------------------
// Define the route for the home page ("/")
// This route responds with an HTML message displaying group members' names
app.get('/', (req, res) => {
  res.send('<h1>Group Members of Lab Assignment 3</h1><p>Jasmandeep Kaur, Simranjeet Kaur, Navleen Kaur Thind</p>');
});

// -------------------- Start the Server --------------------
// Start the Express server and listen for incoming requests on the defined port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

