/**
 * Created by key on 16/6/20.
 */


//udp服务器

var dgram = require("dgram");

//文件
var fs = require('fs');
// 加载编码转换模块
var iconv = require('iconv-lite');

var server = dgram.createSocket("udp6");
var messageToSend = new Buffer("A message to send");


// 如果没用那个参数,就不要写那个参数
server.on("message", function (msg) {
    handlerVideo(msg);
});


server.on("listening", function () {


    var address = server.address();

    console.log("server listening " +
        address.address + ":" + address.port);
});

server.bind(1234);


// /*
// /**//* byte 0 */
// unsigned char csrc_len:4;        /**//* expect 0 */
// unsigned char extension:1;        /**//* expect 1, see RTP_OP below */
// unsigned char padding:1;        /**//* expect 0 */
// unsigned char version:2;        /**//* expect 2 */
//
// /**//* byte 1 */
// unsigned char payload:7;        /**//* RTP_PAYLOAD_RTSP */
// unsigned char marker:1;        /**//* expect 1 */
//
// /**//* bytes 2, 3 */
// unsigned short seq_no;
// /**//* bytes 4-7 */
//
// // 32位
// unsigned  int timestamp;
// /**//* bytes 8-11 */
// unsigned  int ssrc;
// */

var globalRTPHeader = {

    csrc_len  :0,
    extension :0,
    padding :0,
    version :2,
    payload :7,
    marker : 1,
    seq_no : 0,
    timestamp : 0,
    ssrc : 0
};



//处理视频和音频的数据
function handlerVideo(data) {

    //解析前面的12个字节,查看是什么数据
    //第一个字节的前面两位是 版本好
    var version = data[0] & 0x0



}



//写入大小端口
var test = new Buffer(2);
test.writeUIntBE(0xABCD, 0, 2);
console.log(test);






// 下面是 udp服务器

// 加载net 模块
var net = require('net');

// 创建服务器
var server1 = net.createServer();
var server2 = net.createServer();

// 服务器监听端口链接
server1.on('connection',function (client) {

    client.write("hello\n");
    console.log("new client connection");
    // 如果调用了 client .end() 就是 不保留那个客户端

    // client.on('lookup', function (client) {
    //    console.log(client.address);
    // });

    client.on('close', function() {
        console.log('client disconnected');
    });

    // 收到数据
    client.on('data', function(data){

        console.log(data);
    });

});

server1.on('close', function (client) {

    console.log(client + "have lived");

});


//server2
// 服务器监听端口链接
server2.on('connection',function (client) {

    client.write("hello\n");
    console.log("new client connection");
    // 如果调用了 client .end() 就是 不保留那个客户端

    // client.on('lookup', function (client) {
    //    console.log(client.address);
    // });

    client.on('close', function() {
        console.log('client disconnected');
    });

    // 收到数据
    client.on('data', function(data){

        console.log(data);
    });

});

server2.on('close', function (client) {

    console.log(client + "have lived");

});




//开始监听
// server.listen({
//     host: 'localhost',
//     port: 8989,
//     exclusive : true  // 单独执行
// });

server1.listen(8989);
server2.listen(9000);



// address = server.address();
// console.log("opened server on %j", address);
//
//  */