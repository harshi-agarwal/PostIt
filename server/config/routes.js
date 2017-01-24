var session=require('./../controllers/session.js');
var question=require('./../controllers/question.js');

module.exports=function(app){
  app.post('/user/login',function(req,res){
    session.logReg(req,res);
  })
  app.get('/logout',function(req,res){
    session.logout(req,res)
  })
  app.get('/user/checksess', function(req, res){
		session.checkSess(req, res)
	})
  app.post('/question/add',function(req,res){
    session.addquestion(req,res);
  })
  app.get('/questions',function(req,res){
    session.index(req,res)
  })
  app.post('/answer/add',function(req,res){
    session.addanswer(req,res)
  })
  app.post('/like',function(req,res){
    session.like(req,res)
  })
  app.get('/show/:id', session.show);
  app.get('/showone/:ids', session.showone);
  app.post('/questions/add',question.addquestion);
}
