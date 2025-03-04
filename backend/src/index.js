const express= require("express");
const cors = require("cors");
require("dotenv").config();
const { uploadFile } = require("./controllers/uploadController");
const { fetchModals } = require("./controllers/fetchModals");

const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res)=> {
    res.send("Hello World!");
});
app.post("/upload", uploadFile);
app.get("/getmodels", fetchModals);

const PORT= process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));