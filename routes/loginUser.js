var express = require('express');
var router=express.Router();
var loginCont = require('../controller/loginUser');

console.log("entered into register")
router.post('/',loginCont.auth,loginCont.view);

module.exports=router;