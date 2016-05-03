/**
 * Created by Admin on 5/2/16.
 */
'use strict';
var app = angular.module('angularApp');

app.controller('splashCtrl', function(myService, $scope, $state) {
    //console.log($state.params);

});
app.controller('homeCtrl', function(myService, $scope, $state) {
    $scope.editing = false;
    myService.getAll()
        .then(stuff => {
            $scope.apiData = stuff;
        });
    $scope.editItem = function(item, itemData) {
        $scope.editing = true;
        $scope.editQuestion= item.question;
        $scope.editAnswer= item.answer;
        $scope.editCategory= item.category;
        $scope.editId = item._id;
        var id =item._id;
    };
    $scope.postEdit = function() {
        var edited = {
            question: $scope.editQuestion,
            answer: $scope.editAnswer,
            category: $scope.editCategory
        };
        myService.editById($scope.editId,edited)
            .then($scope.editing = false)
            .then(myService.getAll()
                .then(stuff => {
                    $scope.apiData = stuff;
                })
            )
    }


});
app.controller('deleteCtrl', function(myService, $scope, $state) {
    //console.log($state.params);
    myService.deleteById($state.params.id)
        .then($state.go('home'));

});

app.controller('state1Ctrl', function(myService, $scope, $state) {
    $scope.newPost = function(){
        var newData = {
            question: $scope.newQuestion,
            answer: $scope.newAnswer,
            category: $scope.newCategory
        };
        myService.create(newData)
            .then($state.go('home'));

    }

});

app.controller('state2Ctrl', function(myService, $scope, $state) {
    console.log($state);
    $scope.questions=[];
    $scope.currentQuestion = {};
    $scope.answer = false;
    myService.getByCategory($state.params.category)
        .then(stuff => {
            $scope.questions = stuff.data;
            pickCard();

        });

    function pickCard () {
      //  console.log($scope.questions);
        var randCard = Math.floor(Math.random()*$scope.questions.length);
        if (randCard <0) {
            randCard =0;
        }
        $scope.currentQuestion.question = $scope.questions[randCard].question;
        $scope.currentQuestion.answer = $scope.questions[randCard].answer;
        $scope.currentQuestion.category = $scope.questions[randCard].category;
    }
    $scope.answerQuestion = function() {
        $scope.answer = true;
    };
    $scope.nextQuestion = function() {
        $scope.answer = false;
        pickCard();
    }

});


