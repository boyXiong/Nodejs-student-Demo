/**
 * Created by key on 16/6/17.
 */

var tmp = ['abc', 'def', 'gh'];

console.log(tmp.join('|'));

var tmp1 = ['A', 'B', 'C'];

if (tmp1 instanceof  Array){
    console.log("tmp1 是 数组");
}

if (Array.isArray(tmp1)){
    console.log("tm1 是数组");
}

// console.log(tmp1.toString());
// console.log(tmp1.toLocaleString());
// console.log(tmp1.valueOf());



