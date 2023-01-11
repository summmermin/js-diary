let funcThis=null;
function Func(){
    funcThis=this;
}
const o1=Func();
if (funcThis===window){
    console.log('window')
}
const o2=new Func();
if (funcThis===o2){
    console.log('o2')
}