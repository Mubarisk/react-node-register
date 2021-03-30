const express = require('express');
const router = express.Router();
const schema = require('../models/signupmodels');
const bcrypt = require('bcrypt');
router.post('/signup', async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const ps = await bcrypt.hash(req.body.password, salt);
    console.log(ps);
    const datapass = new schema({   //passing the data to the schema db
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: ps
    })
    datapass.save()
        .then(data => {
            console.log("success 1111");
        })
        .catch(err => {
            console.log("error 1111" + err);
        })

});
module.exports = router;