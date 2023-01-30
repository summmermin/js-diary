const http = require('http');
const express = require('express');
const app = express();
const server = createServer(app);
const cors = require('cors');

const PORY = 8080;

// 특정 도메인에게만 허용하기
let corsOptions={
    origin:'https://summmermin.github.io/portfolio/',
    credentials:true
}

app.use(cors(corsOptions));
app.get('/', (req, res) => {
    res.send('안녕하세요!');
});
server.listen(PORT, () => {
    console.log(`server가 구동중 port 번호 ${PORT}`);
});
