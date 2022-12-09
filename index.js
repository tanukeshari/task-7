const promisewifebringigTicks= new Promise((resolve , reject )=>{
    setTimeout(()=>{
        resolve('ticket')
    },3000)
});

 const getColdDrinks = promisewifebringigTicks.then((t)=>{
    console.log(`husband: we should go in`);
    console.log('wife : no i am hungry');
    return new Promise((resolve, reject )=>{resolve (`${t} ColdDrinks`);
   
});

 });
  const getButter = getColdDrinks.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: i need butter');
    return new Promise((resolve, reject)=> resolve(`${t} butter`));
 });

getButter.then((t)=>

console.log(t));


 const preMovie= async()=> {

const promisewifebringigTicks=new Promise((resolve, reject)=>{
     setTimeout(()=>resolve('ticket'),3000);
  });
//  let ticket= await promisewifebringigTicks;
//  console.log ('husband:  you make a food');

//  console.log(' wife : i am going to party');



const getPopcorn= new Promise((resolve, reject)=> resolve(`popcorn`));
const getCandy = new Promise((resolve, reject)=> resolve(`candy`));
const getCoke= new Promise((resolve, reject)=> resolve(`coke`));

let ticket=await promisewifebringigTicks;


let[popcorn,candy,coke] = await Promise.all([getPopcorn, getCandy, getCoke]);
console.log(`${popcorn} ${candy}, ${coke}`);
  return ticket;
 }
preMovie().then((m)=>console.log(`person: shows${m}`)
    


)

