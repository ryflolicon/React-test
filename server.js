// 1、加载模块
const http = require('http');
const fs = require('fs');
// 2、创建http
var server = http.createServer(); // 创建一个web容器 静态服务器
// 3、监听请求事件
server.on('request', function (request, response) {

 //手动配置类似apache
  let host = '.';   //host is localhost:8080
  let filePath = '/pages/index.html';
  let url = request.url;

  if(url != '/'){
    filePath = url;
  };
  console.log("Get access for:"+host + filePath);
  fs.readFile(host + filePath,(err,data) => {
    if(err){
      return response.end('404 not found')
    }
    response.end(data)
  })

    // 监听到请求之后所做的操作
    // request 对象包含：用户请求报文的所有内容
    // 我们可以通过request对象，获取用户提交过来的数据

    // response 响应对象,用来响应一些数据
    // 当服务器想要向客户端响应数据的时候，就必须使用response对象

    // 响应html代码，
    // 有些浏览器会显示乱码，可以通过设置http响应报文的响应头来解决
/* 
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.write('<h1>hello world！</h1>');
    response.end();

    var fileName="./pages/example.html";
    fs.readFile(fileName,function(err,data){
        if(err)
            console.log("对不起，您所访问的路径出错");
        else{
            response.end(data);
        }
    })
*/
})
// 4、监听端口，开启服务
server.listen(8080, function(){
    console.log("服务器已经启动，可访问以下地址：");
    console.log('http://localhost:8080');
})

