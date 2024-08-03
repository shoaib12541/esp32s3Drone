const express = require("express");
const app = express();

const cors = require("cors");
const port = 5000;

// Add middlewares
app.use(express.json());
app.use(cors()); // Add parentheses to call the function

// Default route
app.get("/", (req, res) => {
    res.send(`<h1> This is the server code </h1>`);
});

app.post("/api/v1/create", (req, res) => { // Add a leading slash to the route path
    console.log("The esp32s3 sent data here ", req.body);
    res.send("The data is fetched here ");
});

// Server listening
app.listen(port, () => {
    console.log(`Our server is running on port ${port}`);
});
