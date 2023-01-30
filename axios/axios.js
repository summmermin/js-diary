import axios from "axios";

// axios 응답(res) 데이터
axios({
    url: 'http://json-server-exam/json/json', //통신할 웹문서
    method: 'get', //통신방식
    data: { //인자(어떤 함수를 호출시에 전달돼는 값)로 보낼 데이터
        foo: 'diray'
    }
})
.then(function (response){
    console.log(response.data) //200 // 서버가 제공한 응답(데이터)
    console.log(response.status) //'ok' // 서버의 응답의 HTTP 상태 코드
    console.log(response.statusText) //statusText는 서버 응답으로 부터의 HTTP 상태 메시지
    console.log(response.headers) // header 서버가 응답 한 헤더는 모든 헤더 이름이 소문자로 제공
    console.log(response.config) //config 는 요청에 대해 axios 에 설정된 구성(config)
})

// post 메서드에는 일반적으로 데이터를 Message Body에 포함시켜 보낸다.
axios.post("url",{
    firstName:'summer',
    lastName:'min'
})
.then(function (response){
    //response
}).catch(function (error){
    //error 실행
})