var mongoose=require('mongoose');
var User=mongoose.model('User');
var Question=mongoose.model('Question');
var Answer=mongoose.model('Answer');
module.exports=(function(){
  return{
    addquestion:function(req,res){
      console.log(req.session.user._id,"i am in questionsession")
      console.log(req.body)
      var question=new Question({ques:req.body.ques,desc:req.body.desc,user:req.session.user._id,count_ans:0});
      question.save(function(err,data){
        if(err){
          console.log(err);
        }
        else{
          res.json(data)

        }
      })
    }
  }
  })();
