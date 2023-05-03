const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors())

const chefData = require("./chef-data.json")

app.get("/chef-info", (req,res) => {
    res.send(chefData);
})

app.get("/chef-info/:id", (req,res)=> {
    const id = req.params.id;
    const chefInfo = chefData.find(chef=> chef.id == id)
    console.log(chefInfo);
    res.send(chefInfo);
})

app.get("/", (req, res) => {
    res.send("server is running");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})