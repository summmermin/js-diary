//유저 ID를 인자로 받아 DB나 API 연동 없이 임의의 유저 객체를 리턴
/*----------버전1--------------*/
// function findUser(id) {
//     const user = {
//         id: id,
//         name: "User의 아이디는" + id,
//     };
//     return user;
// }
//
// const user = findUser(1);
// console.log("user:", user)
//위와 같이 우리가 흔히 생각하는 일반적인 함수란 입력(파라미터)이 있고 출력(리턴값)이 있다

/*----------버전2--------------*/
function findUserAndCallBack(id, cb) {
    const user = {
        id: id,
        name: "user의 아이디는" + id,
    }
    cb(user);
}

findUserAndCallBack(1, function (user) {
    console.log("user는", user);
})