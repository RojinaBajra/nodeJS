var adminLoginModel = require('../model/registermodel');
module.exports={

    auth: (req,res,next) =>{
        adminLoginModel(function(error,data)
        {
            var admindata = data.findOne(
            {
                where:
                {
                    username:req.body.email,
                    password:req.body.password
                }
            }).then(function(authdata)
            {
                console.log(authdata);
                if (!authdata)
                {
                // console.log('auth is null');
                    req.authenticated=false;
                }
                else
                {
                    req.authenticated=true;
                }
                return next();
            });
        
 
        });

    },

    view: (req,res,next)=>{

        if(!req.authenticated){
            res.send('email and password dont match')
        }
        else{
            res.send('successful')
        }
s
        return res.render('loginUser', { message: msg});
    }

}