const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promise resolve value!!")
    },10000);
})

async function handlePromise(){
    const val=await p;
    console.log(val)
    console.log("Namaste Javascript")
}
handlePromise();