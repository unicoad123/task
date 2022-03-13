//callbacks//
//const posts=[];
//function getPosts()
//{
//    setTimeout(()=>
//    {
//        var currenttime=new Date();
//        let output='';
//        posts.forEach((post,index)=>{
//            output+=`<li>${post.title} created ${currenttime.getSeconds()} ago ${timerId}</li>`;
//        });
//        document.body.innerHTML=output;
//    },1000);
//}
//
//function createPost(post,callback)
//{
//    setTimeout(()=>
//    {
//        posts.push(post);
//        callback();
//    },1000);
//    
//}
//createPost({title:`Post One`,body:'This is post one'},getPosts);
//createPost({title:`Post Two`,body:'This is post two'},getPosts);
//createPost({title:`Post Three`,body:'This is post three'},getPosts);
//createPost({title:`Post Four`,body:'This is post four'},getPosts);

//getPromise
const posts=[];
function getPosts()
{
    setTimeout(()=>
    {
        var currenttime=new Date();
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post)
{
    return new Promise((resolve,reject)=>{
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
    },0);
});
}
function updateLastUserActivityTime(post)
{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
    {
       let currenttime=new Date();
       let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title} created ${currenttime.getSeconds()}</li>`;
        });
        document.body.innerHTML=output;
        const error=false;
        if(!error)
        {
            resolve();
        }
        else{
            reject('Error: Something went wrong');
        }
    },1000);
});
}
function deletePost(post)
{
    return new Promise((resolve,reject)=>{
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
    },2000);
});
}

createPost({title:'Post One',body:'This is post one'}).then(getPosts).catch(err=>console.log(err));
createPost({title:'Post Two',body:'This is post two'})
createPost({title:'Post Three',body:'This is post three'}).then(getPosts).catch(err=>console.log(err));
updateLastUserActivityTime(posts).then(getPosts).catch(err=>console.log(err));
deletePost(posts)
.then(getPosts)
.catch(err=>console.log(err));



