app.controller('sessionController',function($scope,sessionFactory,$route,$location,$routeParams){
  $scope.questions=[];
  sessionFactory.checkSess(function(data){
    $scope.session_user=data
  })
  $scope.logReg=function(){
    if($scope.newUser==undefined||$scope.newUser.name.length<3){
      $scope.error="something went wrong";
    }
    else{
    sessionFactory.logReg($scope.newUser,function(data){
      $scope.error=data;
      console.log($scope.error);
    });
  }
  }
  $scope.addquestion=function(){
    if($scope.newquestion.ques===undefined ||$scope.newquestion.ques.length<10){
      $scope.error="something went wrong";
    }
    else{
    sessionFactory.addquestion($scope.newquestion,function(data){
      $scope.newquestion={};
      $route.reload()
      $location.url('/dashboard');
    })

  }
}
sessionFactory.index(function(data){
    $scope.questions=data;
  })
if($routeParams.id){
  // $scope.showques=$routeParams;
  console.log($routeParams.id);
  sessionFactory.show($routeParams.id,function(data){
    $scope.question=data
  })
}
if($routeParams.ids){
  // $scope.showques=$routeParams;
  console.log($routeParams.ids);
  sessionFactory.showone($routeParams.ids,function(data){
    $scope.question=data
  })
}
$scope.addanswer=function(){
  if($scope.newanswer.answer===undefined ||$scope.newanswer.answer.length<5){
    $scope.error="something went wrong";
  }
  else{
  sessionFactory.addanswer($scope.newanswer,$scope.question,function(data){
    $scope.newanswer={};
    $location.url('/dashboard');
  })
}
}
$scope.like=function(answer){
  console.log(answer);
  sessionFactory.like(answer,function(data){
    $scope.like=data;
    $route.reload();

  })
}
$scope.cancel=function(){
  $location.url('/dashboard')
}
})
