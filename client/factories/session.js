app.factory('sessionFactory',function($http,$location){
  var factory={};
  factory.checkSess=function(cb){
    $http.get('/user/checksess').success(function(data){
    if(!data){
      $location.url('/logreg')
    }
    else{
      cb(data);
    }
    })
  }
  factory.logReg=function(user,cb){
    $http.post('/user/login' ,user).success(function(data){
      if(data.errors){
        // console.log(data.errors.name.message);
        cb(data.errors.name.message);
      }
      if(data.status){
        $location.url('/dashboard');
      }
      else{
        $location.url('/logreg');
      }
    })
  }
  factory.addquestion=function(newquestion,cb){
    $http.post('/question/add',newquestion).success(function(data){
      cb(data);
    })
  }
  factory.index=function(cb){
      console.log("i am in index")
      $http.get('/questions').success(function(data){
        cb(data);
      })
    }
    factory.addanswer=function(newanswer,showques,cb){
      var data={
        ques:showques,
        answer:newanswer,
      }
      $http.post('/answer/add',data).success(function(data){
                cb(data);
      })
    }
    factory.like=function(answer,cb){
      $http.post('/like',answer).success(function(data){
        cb(data);
      })
    }
    factory.show=function(id,cb){
      $http.get(`/show/${id}`).success(function(data){
        cb(data);
      })
    }
    factory.showone=function(ids,cb){
      $http.get(`/showone/${ids}`).success(function(data){
        cb(data);
      })
    }
  return factory;
})
