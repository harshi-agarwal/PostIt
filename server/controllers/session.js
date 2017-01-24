var mongoose=require('mongoose');
var User=mongoose.model('User');
var Question=mongoose.model('Question');
var Answer=mongoose.model('Answer');
module.exports=(function(){
  return{
    logReg:function(req,res){
      User.findOne({name:req.body.name},function(err,user){
          if(!user){
          var user=new User(req.body);
          user.save(function(err,user){
            if(err){
              res.json(err);
            }
            else{

              req.session.user=user;
              req.session.save()
              res.json({status:true})
            }
          })
        }
        else{
          req.session.user=user;
          req.session.save()
          res.json({status:true})
        }
      })
    },
    logout:function(req,res){
      console.log(req.session.user)
      req.session.destroy()
      res.redirect('/')
    },
    checkSess: function(req, res){
			if(req.session.user){
				res.json(req.session.user)
			}else{
				res.send(null)
			}
		},
    addquestion:function(req,res){
      var question=new Question({ques:req.body.ques,desc:req.body.desc,user:req.session.user._id,count_ans:0});
      question.save(function(err,data){
        if(err){
          console.log(err);
        }
        else{
          res.json(data)

        }
      })
    },
    index:function(req,res){
      Question.find({}).populate('user').populate('answers').exec(function(err,data){
        Question.populate(data,{path:'answers.user',model:'User'},function(err,results){
        if (err){
          console.log(err);
        }
        else {
          {
              res.json(data);

          }
        }
      })
    })
    },
    addanswer:function(req,res){

       Question.findOne({ques:req.body.ques.ques},function(err,data){
      var answer=new Answer({user:req.session.user._id,ques:data._id,answer:req.body.answer.answer,likes:0})
       data.answers.push(answer._id);
       data.count_ans=data.count_ans+1;
       data.save()
       answer.save(function(err,answer){
         res.json({status:true});
       })

   })
        },
like:function(req,res){
  Answer.findOne({_id:req.body._id},function(err,data){
    if (err){
      console.log(err);
    }
    else {
      {
        data.likes=data.likes+1;
        data.save(function(err,data){
          res.json(data);

        })

      }
    }
  })
},
show(req, res){
  Question.findOne({_id:req.params.id},function(err,data){
    res.json(data);
  })
},
showone(req, res){
  Question.findOne({_id:req.params.ids}).populate('user').populate('answers').exec(function(err,data){
    Question.populate(data,{path:'answers.user',model:'User'},function(err,results){

    res.json(data);
  })
})
}
}
})();
