console.log("Promises In JS")
///////////////////////////////////////Promise 1

const promise1 = new Promise((accept,reject)=>{

    setTimeout(()=>{
        console.log('Promise 1')
        accept()

    },3000)
})
promise1.then(()=>{
    console.log('Promise Accepted');
})
///////////////////////////////////////Promise 2
console.log('***Promise 2***')
new Promise((accept,rejected)=>{
    setTimeout(function (){
        console.log('Promise 2  Resolved')
        accept()
    },3000)
}).then(function(){
    console.log('Successfully Resolved')
})

///////////////////////////////////////Promise 3
console.log('***Promise 3***')

const promise3 = new Promise((accepted,rejected)=>{

    setTimeout(() => {
        console.log('Promise 3');
        accepted({user:'Zeeshan',Email:'student@123'})


    }, 3000);
})
promise3.then(function(user){
    console.log('Promise 3 Successfully Run')
    console.log(user);

})

/////////////////////////////////////Promise 4

console.log('***Promise 4***')

const promise4 = new Promise(function(accept,reject){

    setTimeout(function(){
        let error=true;
        if(!error){
            accept({name:'aziz',password:123})
        }
        else{
            reject(
                console.log('Some Error is Found in Promise 4')
            )
        }
    },3000)
})
promise4.then(function(user){

    console.log(user)

    return user.password

}).then(function(user){
    console.log(user)
}).catch(function(){
    console.log('Error: failed')
}
).finally(
    function(){
        console.log('The Promise is accept either rejected')
    }
)

/////////////////////////////////////Promise 5

console.log('***Promise 5***')

const promise5 = new Promise(function(accept,reject){

    setTimeout(function(){
        let error=true;
        if(!error){
            accept({name:'faizan5',password:123})
        }
        else{
            reject(
                console.log('Some Error is Found in Promise 5')
            )
        }
    },3000)

})
async function consumePromise5(){
    try {
    const output =await promise5
    console.log(output)
    }catch (error) {
        console.log('Error Found')
    }
}
consumePromise5()


