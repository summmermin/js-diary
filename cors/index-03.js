const http = require('http');
const express = require('express');
const {createServer} = require("http");
const app = express();
const server = createServer(app);
const cors = require('cors');
const {response} = require("express");

// 모든 http method 허용, 스트링 리턴
// app.use('/summer',(req,res)=>{          //use 메서드는 모든 http 메서드를 허용
//     res.send('summer test');
// })
// app.listen(8080,()=>{
//     console.log('server is listening 8080');
// })

//*********** GET 방식만 허용
app.get('/summer2', (req, res) => {
    const {name} = req.query; //query 파라메터는 req.query 라는 객체에 담겨진다
    res.send('summer get test');
})

/*
* GET과 POST의 가장 큰 차이점은 GET은 request 시에 Header만 존재하고 Body가 없다는 것이다.
* URL 뒤 ? 다음에 key=value&key=value… 이런식으로 key=value를 &로 연결해서 데이터를 보낸다. 이것을 query 파라메터라고 한다.
* GET은 requset시에 body:x에 데이터를 보낼수 없다(그래서 query 파라메터 사용)
* POST는 body에 데이터를 보낼수 있음 & query 파라메터 사용도 가능 // POST 둘다 가능
* */

// POST 방식으로 query 파라메터 사용하기
// app.post('/summmer3', (req, res) => {
//     const {name} = req.query; // Query Parameter 는 Url을 정의하는 규격일 뿐
//     res.send(`hello ${name}`);
// })

//********** POST 방식
app.use(express.urlencoded({
    extended:true
})) //express에는 json을 파싱하는 모듈이 내장되어있지만, urlencoded를 파싱하기 위해선 아래를 확장해야 한다.

app.post('/summer4', (req, res) => {
    const {name} = req.body;
    const result={
        code:0,
        message:'success'
    };
    res.send(`hello ${name}! 저의 결과는 ${result}`)
})

// app 서버 listen 들어라(실행해라) port(몇번포트로 실행할 것인지)
app.listen(8080,()=>{
    console.log(`server is listening 8080`)
})