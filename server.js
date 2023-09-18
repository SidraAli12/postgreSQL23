const express = require("express");
const tutorialsRouter = require('./routes/routes'); // Import the router
const app = express();



// parse requests of content-type - application/json
app.use(express.json());
app.use('/api/tutorials', tutorialsRouter); // Use the router at /api/tutorials
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
