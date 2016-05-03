/**
 * Created by Admin on 5/2/16.
 */
'use strict';

var app = angular.module('angularApp');

app.service('myService',function($http) {
    this.getAll = () => {
        return $http.get('./api/cards');
    };
    this.create = newPost => {
        return $http.post('./api/cards', {question: newPost.question, answer: newPost.answer,
            category: newPost.category});
    };
    this.deleteById = id => {
        return $http.delete(`./api/cards/${id}`);
    };
    this.getByCategory = id => {
        return $http.get(`./api/cards/${id}`);
    };
    this.editById = (id, newData) => {
        return $http.put(`./api/cards/${id}`, {id: id, question: newData.question,
        answer: newData.answer, category: newData.category});
    }


});
