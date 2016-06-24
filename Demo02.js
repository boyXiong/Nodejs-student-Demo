/**
 * Created by key on 16/6/17.
 */

var os = require('os');


// os.platform()  返回操作系统平台的名字（如Linux, Windows)
// os.type() 返回操作系统的名字
// os.hostname() 返回主机名
// os.arch() 返回体系架构（如ia32)
// os.release() 返回操作系统内核版本号（如2.6.32）
// os.cpus() 返回每核CPU的参数（型号/主频/用于基础进程的毫秒数等）
// os.totalmem() 返回总内存数
// os.freemem() 返回自由内存数
// os.networkInterfaces() 返回网络接口（网卡的名称/地址/IP等）
// os.EOL 返回系统换行符（如 '\n'）
// os.tmpdir()返回系统临时文件的文件夹
// os.endianness() 返回系统大小尾特征（如'LE')

console.log(os.totalmem() / 1024 / 1024);
console.log(os.hostname());
console.log(os.cpus());




var array = ['a', 'b', 'c'];

var index = array.push('d');

console.log(index);

var item = array.pop();

console.log(item);

// 取的最后一个 同时也在队列中,销毁了那一个
var itemFrist = array.shift();

console.log(itemFrist);

// 数组的长度
console.log(itemFrist.length);

var intArray = [4,3,5,2,3,0,1];

// 反向交换位置
console.log(intArray.reverse());

// 排序
console.log(intArray.sort());