/////////////////////////////////////      Promise     ////////////////////////////////
//console.log(`person1:show ticket`);
//console.log(`person2:show ticket`);
//const promiseWifeBringingTickket= new Promise((resolve,reject)=>
//{
//    setTimeout(()=>{resolve('ticket');
//},3000)});
//const getPopcorn=promiseWifeBringingTickket.then((t)=>
//{
//    console.log('hus:We Should go');
//    console.log('wife:I am hungry');
//    return new Promise((resolve,reject)=>resolve(`${t} popcorn`));
//}
//);
//getPopcorn.then((t)=>console.log(t));
//
//const getButter=getPopcorn.then((t)=>
//{
//    console.log('hus:we should go');
//    console.log('wife:i need butter');
//    return new Promise((resolve,reject)=>resolve(`${t} butter`));
//});
//getButter.then((t)=>console.log(t));
//const getColdDrinks=getButter.then((t)=>
//{
//    console.log('hus:we should go');
//    console.log('wife:i need cold drink');
//    return new Promise((resolve,reject)=>resolve(`${t} cold-drink`));
//});
//getColdDrinks.then((t)=>console.log(t));
//console.log(`person4:show ticket`);
//console.log(`person5:show ticket`);

/////////////////////////////////////      Async-await     ////////////////////////////////
//console.log(`person1:show ticket`);
//console.log(`person2:show ticket`);
//const preMovie=async()=>
//{
//    const promiseWifeBringingTickket= new Promise((resolve,reject)=>
//   {
//    setTimeout(()=>resolve('ticket'),3000);
//   });
//   const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
//   const addButter=new Promise((resolve,reject)=>resolve('butter'));
//   const getcolddrink=new Promise((resolve,reject)=>resolve('cold-drink'));
//   let ticket=promiseWifeBringingTickket;
//   console.log('hus:We Should go');
//   console.log('wife:I am hungry');
//   let popcorn=await getPopcorn;
//   console.log(`hus:i got ${popcorn}`)
//   console.log('hus:we should go');
//   console.log('wife:i need butter');
//   let butter=await addButter;
//   console.log(`hus:i got ${butter}`)
//   console.log('hus:we should go');
//   console.log('wife:lets go');
//   let cold-drink=await getcolddrink;
//   console.log(`hus:i got ${cold-drink}`)
//   console.log('hus:we should go');
//   console.log('wife:lets go');
//   return ticket;
//}
//preMovie().then((m)=>console.log(`Person3 shows:${m}`));
//console.log(`person4:show ticket`);
//console.log(`person5:show ticket`);

//////////////////////////////////////////   Promise All /////////////////////////////////
//console.log(`person1:show ticket`);
//console.log(`person2:show ticket`);
//const preMovie=async()=>
//{
//    const promiseWifeBringingTickket= new Promise((resolve,reject)=>
//   {
//    setTimeout(()=>resolve('ticket'),3000);
//   });
//   const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn'));
//   const getCandy=new Promise((resolve,reject)=>resolve('candy'));
//   const getCoke=new Promise((resolve,reject)=>resolve('coke'));
//   let ticket=promiseWifeBringingTickket;
//   let[popcorn,candy,coke]=await Promise.all([getPopcorn,getCandy,getCoke])
//   console.log(`${popcorn},${candy},${coke}`);
//   return ticket
//}
//preMovie().then((m)=>console.log(`Person3 shows:${m}`));  
//console.log(`person4:show ticket`);
//console.log(`person5:show ticket`);

/////////////////////////////////////////  CREATE POST, DELETE POST   ////////////////////////////////

const Post1=async()=>
{
    const posts=[];
    const getPosts=new Promise((resolve,reject)=>
    setTimeout(()=>
    {
        var currenttime=new Date();
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000));

    const createPost= new Promise((post,resolve,reject)=>
        setTimeout(()=>
        {
            posts.push(post);
            const error=false;
            if(!error)
            {
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        },0));
        createPost({title:'Post One',body:'This is post one'}).then(getPosts).catch(err=>console.log(err));
        createPost({title:'Post Two',body:'This is post one'}).then(getPosts).catch(err=>console.log(err));
        createPost({title:'Post Three',body:'This is post one'}).then(getPosts).catch(err=>console.log(err));
        createPost({title:'Post Four',body:'This is post one'}).then(getPosts).catch(err=>console.log(err));
        const deletePost=new Promise((resolve,reject)=>
        setTimeout(()=>
        {
            posts.forEach((post,index)=>{
             posts.pop(post);
            });
            const error=false;
            if(!error)
            {
                resolve();
            }
            else{
                reject('Array is Empty now');
            }
        },2000));
        let[popcorn,candy,coke]=await Promise.all([getPosts,createPost,deletePost]);
        console.log(`${popcorn},${candy},${coke}`);
      
}
Post1().then(()=>console.log(`Posts got created and deleted`));