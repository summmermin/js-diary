const http = require('http'); //require는 nodeJS에서 다른 패키지를 불러올 때 사용되는 키워드
const express = require('express'); // node_modules에서 express라는 모듈을 활용한다
const app = express(); //app이라는 변수에 express 함수의 변환 값을 저장하였습니다. 이 app이라는 변수로 REST End Point들을 생성
const server = createServer(app);
const cors = require('cors');

const PORT = 8080;

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
