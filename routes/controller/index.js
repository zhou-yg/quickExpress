/**
 * Created by zyg on 15/11/6.
 */
var env = process.env.NODE_ENV;

module.exports = {
  index:function(req,res){
    res.render('index',{
      env:env
    });
  }
};