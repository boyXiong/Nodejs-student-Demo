/**
 * Created by key on 16/6/20.
 */

// 字面量创建一个对象
var Person = {
    "name" : null,
    age : 0
};

// 下面两者是相等的,只是 字面量创建一个对面,不会触发构造方法
var tt1 = new Object();
var tt2 = {};


// 两种方法访问成员属性,一种是 . 另一种是 [] ,都可以
console.log(Person.name);

var tmp = "age";
console.log(Person[tmp]);
console.log("#####################################################");


var person1 = {
    toLocaleString : function () {
        return "Nicholas";
    },
    toString : function () {
        return "Nikolaos"
    }

};

var person2 = {
    toLocaleString : function () {
        return "Grigorios";
    },
    toString : function() {
        return "Greg";
    }
};

var array = [null, person1, person2];

// console.log(array);
console.log(array.join("|").toString());
console.log(array.toLocaleString());
console.log(array.valueOf());



