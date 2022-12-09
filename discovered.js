//Originally they were designed to decouple variable values from the time and place of their calculation, making parallelisation easier. Later, they were re-discovered for their ability to simplify asynchronous code by moving it to a more direct style rather than the continuation passing style necessitated without them.


function buycar(){
    return new Promise((res, rej)=>{
setTimeout(()=>{
    console.log('buy a car')
},1000)
}

    )}
function planatrip(){
    return new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log('lets go to manali');
    },2000)
}

    )}
function reachmanali(){
    return new Promise((res , rej )=>{

    
    setTimeout(()=>{
        console.log('reached manali');
    })
}
    )}
buycar();
planatrip();
reachmanali();

