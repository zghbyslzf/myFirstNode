// 引入http服务
const http = require('http')
// 定义host域名
const hostname = '127.0.0.1'
// 定义开放接口
const port = 3000
// 返回http.sercer实例
const server = http.createServer((req, res) => {
  // 返回http状态码
  res.statusCode = 200
  // 为请求头对象设置单个请求头的值
  res.setHeader('Content-Type', 'text/plain')
  // 完成发送请求
  res.end('Hello world\n')
})
// 启动server服务监听链接
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`)
})
