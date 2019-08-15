https://www.cnblogs.com/wanshutao/p/3750096.html 	// 正则表示的运用
https://blog.csdn.net/qq_34645412/article/details/81170576 	// ES6 Promise用法小结

 js

	1.闭包
		底层:栈 函数执行完毕栈不回收
		高层:函数当做对象去处理
	2.正则
		search 返回时数字
		match 返回你所匹配的东西

	3.call, apply的使用
		function sum(num1, num2){
      if(num1 && num2) return num1 + num2;
      else return num1
    }
    function callSum1(num1, num2){
        return sum.apply(this, arguments);
    }
    function callSum2(num1, num2){
      let names="pps"
        return sum.call(this,names);
    }

    alert(callSum1(10,10));   //20
    alert(callSum2(10,10));   //20


4.事实上，传递参数并非 apply()和 call()真正的用武之地;它们真正强大的地方是能够扩充函数 赖以运行的作用域。下面来看一个例子。
    window.color = "red";
		var o = { color: "blue" };
		function sayColor(){
		    alert(this.color);
		}
		sayColor();	// red
		sayColor.call(this);	// red
		sayColor.call(window);	//red
		sayColor.call(o);	//blue
5.substring
		slice()第一个参数指定子字 符串的开始位置，第二个参数(在指定的情况下)表示子字符串到哪里结束。
		substring()第一个参数指定子字 符串的开始位置，第二个参数(在指定的情况下)字符串最后一个字符的位置。
		substr()第二个参数指定的是要返回的字符个数
6.beforeRoute Update(to, from, next){
	this.update(to.parmas.id) // 调用方法更新id对应的组件更新
	next()
}
7.websoket 简称ws

	socket.io 兼容IE5，简单方便
	const http = require('http')
	const io = require('cocket.io')
	// 建立普通连接
	const server = http.createServer((req, res)=>{})
	server.listen(8080)
	// 建立ws  socket连接
	const wsServer = io.listen(server) // 你创建的http链接
	wsServer.on('connection', sock=>{
		// 接收
		sock.on('name', res=>{
			console.log(res)
		})
		// 发送
		setInterval(()=>{
			sock.emit('timer', new Date().getTime()) // emit 发送数据，指定名称，数据资源
		}, 1000)
	})


	// 接收socket数据  html页面接收

	首先引入socket.io文件
	<!DOCTYPE html>
	<html>
	  <head>
	    <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width,initial-scale=1.0">
	    <title>docs</title>
	  </head>
	  <body>
	   
	  </body>
	  <script src="localhost:8080/socket.io/socket.io.js"></script>

	  <script>
			const sock = io.connect（'ws://localhost:8080/'）
			sock.on('timer', res=>{
				cosnole.log.log(res)
			})
			sock.emit('name', 'pps')
	  </script>
	</html>

	8.原生webSocket
		
		request 请求头
		Upgrade: webSocket  // 升级为webSocket协议
		Sec-webSocket-Keys  //	检测是否支持webSocket
		Sec-webSocket-Version //	版本号

		// 后台
		const http = require('http')
		const net = rquire('net')    // 作用创建一个原始的协议
		let server = net.createServer(sock=>{
			console.log('有人链接')
			// sock.once 执行一次

			sock.once('data', buffer=>{
				let str = buffer.toString()
				let hearder = toParse(str)
				if(hearder['upgrade'] != 'WebSocket'){
					cosnole.log('no WebSocket')
					sock.end()
				}else if(hearder['version'] != '13'){
					console.log('server is not 13')
					sock.end()
				}else{
					let key = header['sec-websocket-key']
					let uuid = '自己查' //258EAFA5
					let hash =  crypto.createHash('sha1')
					hash.update(key+uuid)
					let keys = hash.digest('base64')
					// 手写http头  自己查吧
					sock.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\n.......`)
				}
			})
		})
		
		function toParse(str){
			const arr = {}
			let arrs = str.split('\r\n').filter(res=>res)
			arrs.shift()
			arrs.forEach(res=>{
				let [name, value] = res.split(':')
				name = name.replace(/^\s+|\s+$/g).toLowerCase()
				value = name.replace(/^\s+|\s+$/g)
				arr[name] = value
			})
			return arr
		}



		// 前台
		<html>
		  <head>
		    <meta charset="utf-8">
		    <meta name="viewport" content="width=device-width,initial-scale=1.0">
		    <title>docs</title>
		  </head>
		  <body>
		   
		  </body>

		  <script>
				const wsServer =  new WebSocket('localhost:8080')
							wsServer.onopen
							wsServer.onmessage
							wsServer.onerror
							wsServer.onclose
		  </script>
		</html>
	
koa 

const Koa = require('koa')

const server = new Koa()

const static = require('koa-static')

const body = require('koa-better-body')  // 获取所有地址栏的参数(get, post , all)

const session = require('koa-session')

const mysql = require('mysql')

const co = require('co-mysql')

// 容错处理 也 可以在路由处进行处理
server.use(async (ctx,next)=>{
	try{	
		await next()
	}catch(e){
		ctx.body = 'database is error'
	}
})
//-------------------------- 
server.listen(8080)

server.context.a = 12  // 一般用于定义去全局变量

let router = new Router()

// ----------------------------
ctx.throw(状态码, 错误信息)
router.get('/login' async ctx=>{
	ctx.throw(400, 'use passwoed is required')
})


ctx.assert 断言测试
ctx.assert(条件,状态码,描述信息)
router.get('/login' async ctx=>{
	ctx.assert(ctx.query.use, 400, 'use is required')
	ctx.assert(ctx.query.password, 400, 'password is required')
})


ctx.state = 305
router.get('/cartoon' async ctx=>{
	ctx.state = 404
})

ctx.redirect() // 重定向成功跳转
router.get('/login' async ctx=>{
	ctx.redirect('/mews')
})

ctx.attchment()
router.get('/login' async ctx=>{
	ctx.attchment('/a.txt') // 文件路径
})



// ----------------------------
// koa-static
let staticRouter= new Router() // 静态路由

staticRouter.all(/(\.png | \.jpg | \.gif)$/i, {
	maxage: 1000*86400*60
})


staticRouter.all(/(\.css | \.scss | \.less)$/i, {
	maxage: 1000*86400*1
})

// ----------------------------
// koa-better-body
1.上传文件
server.use(body,({
	uploadDir: './static/upload'  //上传文件存放的路径
}))

server.use(async ctx=>{
	cosnole.log(ctx.request.fields)
})
// ----------------------------
// cookie

server.use(async ctx=>{
	ctx.cookie.set('user', 'pps', {
		maxage: 1000*86400*1, // 过期时间
		signed: true // 签名
	}) 
	// 设置 cookie 
	ctx.cookie.get('user') 
	// 获取cookie
})
// ----------------------------
// session  koa-session
server.keys = ['asdasda','21123123','2saawsw23f']
server.use(session,({
	maxAge:20*60*1000,
	renew: true// 自动续期
}, server))

server.use(async ctx=>{
 if(!.session['view']){
	.session['view'] = 0
  }else{
	.session['view']++
	ctx.body = `这是第${ctx.session.view}访问`
 }
})
// ----------------------------
// 连接 mysql
let conn = mysql.createPool({
	host:'localhost',
	user:'root',
	password: '',
	database: ''
})

let db = co(conn)

server.context.db = db

server.use(async ctx=>{
	let data = await db.query(`SELECT * FROM item_table`)
	ctx.body = data
})

// ----------------------------
// const fs = require('await-fs') // koa 读取文件使用
	
// ----------------------------
// koa 接受数据 完成post提交
	const {title, name, age } = ctx.request.files //获得参数
	// add

	ctx.db.query('INSERT INTO class_tab (title, name, age) VALUES(?,?,?)',[title, name, age])
	router.post('/banner',async ctx=>{
		const {title, name, age} = ctx.request.files
		await ctx.db.query('INSERT INFO class_tab (title, name, age) VALUES (?,?,?)', [title, name, age])
		ctx.redirect('/admin')
	})

	// del 
	router.get('/banner/del/:id', async ctx=>{
		const {id} = ctx.parmas
		let data = await ctx.db.query(`SELECT * FROM WHERE id=${id}`)
		let {filename} = data.json()
		unlinkFn(`../../updata/${filename}`)
		ctx.db.query('DELETE class_tab WHERE id=?',[id])
		ctx.db.redirect('./admin')
	})

	// update
	// UPDATE class_tab SET title="xx", WHERE id='1'
	router.get('/banner/mod/:id/', async ctx=>{
		let {id} = ctx.parmas
		let data = ctx.db.query('SELECT * FROM class_tab WHERE id=?',[id])
		ctx.assert(data.length<0, 400, 'no data') 
	})



	function unlinkFn(path){
		return new Promise((resolve,reject)=>{
			fs.unlink(path,(err)=>{
				if(err){
					reject(err)
				}else{
					resolve()
				}
			})
		})
	}














server.use(router.Routes())
server.use(staticRouter.Routes())









// webpack 配置多入口
webpack.config.js
module.exports = {
	mode: 'development',
	evtry:{
		index: './src/main1.js',
		admin: './src/main2.js'
	},
	output:{
		path: path.resolve(__dirname, 'boundle'),
		filename: [name].min.js
	}
}

