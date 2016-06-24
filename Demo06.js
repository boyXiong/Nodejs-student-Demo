/**
 * Created by key on 16/6/23.
 */

// 匹配第一个bat 或者 cat 不区分大小写   两者写法一样

    /*
    i 是不区分大小写
    m 是多行查询
    g 是全局,所有的字符串都查询
     */




var pattern1 = /[bc]at/i;

var pattern2 = new RegExp("[bc]at", "i");

// 双转义

/*
    /\[bc\]at/      等价字符串 "\\[bc\\]at"
    /\.at/          等价字符串 "\\.at"
    /name\/age/     等价字符串 "name\\/age"
    /\d.\d{1,2}/    等价字符串 "\\d.\\d{1.2}"
    /\w\\hello\\123/ 等价字符串 "\\w\\\\hello\\\\123"
 */


//双
var zz = pattern1.test("catstrophe");

// console.log(zz);


/*
 RegExp 实列属性
 global: 布尔值,表示是否设置了g 标志
 ignoreCase:布尔值, 表示是否设置了 i 标志
 lastIndex :整数, 表示开始搜索一下一个匹配项的字符串设置,从 0 算起
 multiline: 布尔值,表示是否设置 m 位
 source : 正则表达式的字符串表示
 */

pattern1 = /\[bc\]at/i;

console.log(pattern1.global);
console.log(pattern1.ignoreCase);
console.log(pattern1.multiline);
console.log(pattern1.lastIndex);
console.log(pattern1.source);


pattern1 = RegExp("\\[bc\\]at", "i");

console.log(pattern1.global);
console.log(pattern1.ignoreCase);
console.log(pattern1.multiline);
console.log(pattern1.lastIndex);
console.log(pattern1.source);

console.log("###上面是测试的##");
var text = 'cat, bat, sat, fat';
var pattern1 = /.at/; //就匹配后面有at 的第一个

var matches = pattern1.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern1.lastIndex);
console.log(matches.length);


var matches = pattern1.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern1.lastIndex);
console.log(matches.length);

console.log("###########################");

var pattern2 = /.at/g;
var matches = pattern2.exec(text);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern2.lastIndex);
console.log(matches.length);

console.log("#上下进行比较#");


var matches = pattern2.exec(text);
console.log(matches.index);  // index 是 指 text 根据正则 找到的 字符串首字符,在字符串的第几位
console.log(matches[0]); // 找到匹配的字符串,放入数组
console.log(pattern2.lastIndex); // lastIndex 是 指 text 根据正则 找到的 字符串最后字符,在字符串的第几位
console.log(matches.length); // 匹配到几个,数组里面存放了几个


// 正则表达式 第二个方法 test()
var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;

if (pattern.test(text)){
    console.log("The pattern was matched.");
}














