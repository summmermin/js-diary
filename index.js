//express 모듈 불러오기
const express = require('express')
const cors=require('cors') //한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제
//express 사용
const app = express()
const port = 5000

app.use(express.json()) // app/json 파싱하기 위해 body 의 값이 REST API 를 통해 JSON 형식으로 전달된 것을 파싱 //JSON -> body
app.use(express.urlencoded({extended: false})) //HTML 에서 Form 을 통해서 전송된 데이터를 파싱 //HTML Form -> body
app.use(cors()) //모든 도메인을 허용한다는 뜻 //서비스 배포시 주의!!!**********

// 서버와 클라이언트 간 http 통신시 도메인이 다르다면 원칙적으로 어떠한 리소스도 받을 수 없다.
// 이를 해결하기 위해서, 서버에서 데이터를 보내줄때 'Access-Control-Allow-Origin' 로 특정 도메인을 허용해주어야한다.
// '*'을 해주면, 모두 허용한다.
// 유용한 미들웨어로 cors 미들웨어가 있다.

// 파라미터 변수 뜻
// req : request 요청
// res : response 응답

app.get('/', (req, res) => {
    res.send('5000으로 시작!!')
})

app.listen(port, () => {
    console.log(`${port}번으로 운영중입니다`)
})