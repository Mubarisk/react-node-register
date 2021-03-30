const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./router/router');
const cors = require('cors');
mongoose.connect('mongodb+srv://mubaris:3887@cluster0.lgafj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
    console.log("db connect successfull");
})
app.use(express.json())
app.use(cors())
app.use('/app', router)
app.listen(4000, () => {
    console.log("server running");

});