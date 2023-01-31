findUser(1).then(function (user) {
    console.log("user:", user);
});

function findUser(id){
    return new Promise(function (resolve){
        setTimeout(function (){
            console.log("0.1초 기다리는 중");
            const user={
                id:id,
                name:"user"+id,
            }
            resolve(user);
        },100)
    })
}

// 0.1초 기다리는 중
// user:{id:1,name:"user1"}