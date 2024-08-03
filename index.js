const express = require("express");
const app = express();

const cors = require("cors");
const port = 4000;

//add middlewares 
app.use(express.json());
app.use(cors);



// default route
app.get("/",(req,res)=>{
    res.send(`<h1> This is the server code </h1>`)
});

app.post("api/v1/create",(req,res)=>{

    console.log("the esp32s3 sent data here ", req.body);

    res.send("The data is fetched here ");


})

// server listing 
app.listen(port,()=>{
    console.log(`our server is running on port ${port}`)
})