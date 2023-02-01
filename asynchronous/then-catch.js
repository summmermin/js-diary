new Promise((resolve,reject)=>{
    console.log(`처음`);
    resolve();
})
.then(()=>{
    throw new Error(`뭔가 잘못됐어요!`);
    console.log(`do this!`)
})
.catch(()=>{
    console.log(`do that`)
})
.then(()=>{
    console.log(`do this , 그전에 무슨일이 있었든`)
})

//처음
//do that
//do this , 그전에 무슨일이 있었든