const express = require('express');
const app = express();
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT;

app.use('/',require("./routes/routes"))

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})