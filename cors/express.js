const express = require("express")
const app = express();

app.use(express.json()); // expresses.json() 모듈을 사용하면 json요청을 제대로 받을 수 있다.

app.post('/',function (req,res){ //post는 보안이 ok
    console.log(req.body);  //사용자의 JSON 요청
    res.send(req.body); // JSON 응답
})