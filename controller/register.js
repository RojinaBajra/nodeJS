var registerModal = require('../model/registermodel');
module.exports = {

    check: (req, res, next) => 
    {
        req.exists=true;
        registerModal(function(error,data) 
        {
            var user=data.findOne(
            {
                where :
                {
                    email : req.body.email
                    //alert(email)
                    //console.log('email')
                }
            }
            ).then(function(user)
            {
                  //console.log(user);
                  console.log(user);
                  if(user==null)
                  {
                         console.log('no email')
                         console.log('in');
                         data.create(
                         {
                                 ID:'',
                                 email:req.body.email,
                                 password:req.body.password,
                                 status:1
                                 
                         });
                        
                         req.exists=false;
                         return next();
                  }
                  return next();

            });
        });
    },
    
    success: (req, res, next) => {

        if(req.exists==true){
            console.log("Email Exists")
            msg=req.body.email+' Email Exists';
            return res.render('index', { message: msg});
        }
        else{
            console.log('yes u can register')
            msg=req.body.email+' Registration Successfull'
            return res.render('loginUser');
        }

        
       
    }

}


