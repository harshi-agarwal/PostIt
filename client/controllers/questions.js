app.controller('questionController',function($scope,questionFactory,sessionFactory){
  $scope.questions=[];
  $scope.addquestion=function(){

  questionFactory.addquestion($scope.newquestion,function(data){
    $scope.questions=data;
  })
}
})
