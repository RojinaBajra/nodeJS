var express = require('express');
var router=express.Router();
var registerCont = require('../controller/register');

console.log("entered into register")
router.post('/',registerCont.check,registerCont.success);

module.exports=router;