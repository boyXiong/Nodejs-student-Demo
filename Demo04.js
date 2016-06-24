/**
 * Created by key on 16/6/21.
 */

// node 分配空间 以 8kb 为一个单位

// 上面速度慢
var buf = new Buffer('nodejsv0.10.4&nodejsv0.10.4&nodejsv0.10.4&nodejsv0.10.4&');
console.time('string += buf');
var s = '';
for(var i=0;i<10000;i++){
    s += buf; // 如果不是utf-8 的时候,就会崩溃
}
console.timeEnd('string += buf');


// 下面这个速度快
console.time('buf concat');
var list = [];
var len=0;
for(var i = 0; i < 10000; i++){
    
    list.push(buf);
    len += buf.length;
}


var s2 = Buffer.concat(list, len).toString();
console.timeEnd('buf concat');


var tmpJson = {
    name:"p1",
    age :18,
    sex :"male"
};
console.log();

var strJson = JSON.stringify(tmpJson);  //对象转json 字符串
var objJson = JSON.parse(strJson);      //json 字符串 转对象

console.log(strJson);
console.log(objJson);

