app.factory('questionFactory',function($http){
  var factory={};
  factory.addquestion=function(newquestion,cb){
    console.log(newquestion,"i am in factory");
    $http.post('/questions/add',newquestion).success(function(data){
      cb(data);
    })
  }
  return factory;
})
