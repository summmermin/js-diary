const http = require('http');
const express = require('express');
const {createServer} = require("http");
const app = express();
const server = createServer(app);
const cors = require('cors');
const {response} = require("express");

app.use(cors()); //모든 도메인에서 제한 없이 해당 서버에 요청을 보내고 응답받을수있다.
//// 모든 http method 허용

app.get('/', (req, res) => {
    res.send('안녕하세요!');
});
server.listen(PORT, () => {
    console.log(`server가 구동중 port 번호 ${PORT}`);
});