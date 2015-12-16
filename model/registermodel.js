var Sequelize = require('sequelize');
var sequelize = require('../config');
// var info='fdgdffgdf';

module.exports = function(cb){
var data = sequelize.define('users',
{

	ID: {
		type:Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement:true
	    },

	email:Sequelize.STRING(50),
	password:Sequelize.STRING(50),
	status:Sequelize.INTEGER(100),
	createdAt:Sequelize.DATE,
	updatedAt:Sequelize.DATE

},

{
	freezeTableName:true
}
);

 
data.sync().then(function(error){
  // console.log(data);
  if(cb) cb(error,data);  
});
}


