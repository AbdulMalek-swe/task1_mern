const express = require("express");
const user = require("./controller");
const router = express.Router();
 
router
   .route("/register")
    .post(user.userRegister)
 
module.exports = router;