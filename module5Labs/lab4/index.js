const express = require("express"); // import the express package
const friendRoutes = require("./routes/friendRoutes");

const app = express(); // create a new app
const port = 3000; // change this to run the app on a different port - usually a 4 digit number

// STEP 2:
// This middleware allows Express to read JSON from the request body
// Needed for POST and PUT requests
// Question:
// - Why would req.body be undefined without this?
app.use(express.json());

// STEP 3:
// Serve static files from the public folder

// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)

app.use("/", express.static("public"));

// STEP 4:
// Mount all friend-related routes under /friends
// Example:
// /friends
// /friends/filter
// /friends/3
app.use("/friends", friendRoutes);

// STEP 5:
// Start the server
// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
