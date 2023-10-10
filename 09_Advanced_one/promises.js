// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Aync task complete");
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Aync task 2 complete");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("promise consumed");
// })


// const promisethree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({Username:"harsh dixit",email:"example.com"})
//     },1000)
// })

// promisethree.then(function(user){
//     console.log(user);
// })

/*const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"dixit ",password:"12345@@"})
        }
        else{
            reject('ERROR:something went wrong')
        }
        
    },1000)
})
promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(xyz){
    console.log(xyz);
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("The Promise is either resolved or rejected");
})
*/
// const promiseFive= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"pandit",pass:"dixit12121"})
//         }
//         else{
//             reject('ERROR:JS went wrong')
//         }
//     },1000)
// })

/*async function consumePromisefive(){
    const response =await promiseFive  // async disadvatage is that it can't direct handle the error
                                       // so we use try catch
    console.log(response);
}
consumePromisefive()*/

// async function consumePromisefive(){
//     try {
//         const response=await promiseFive
//         console.log(response);
        
//     } catch (error) {
//         console.log(error)
        
//     }
// }
// consumePromisefive()


// async function getallUser(){
//     try {
//         const response= await fetch('https://api.github.com/users/harshdixit1')
//         console.log(response);
//         const data=await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log('Error',error);
        
//     }

// }
// getallUser()


// print above using .then and .catch

fetch('https://api.github.com/users/harshdixit1')
.then(function(response){  // parameter can be anything xyz  but here we take response
    return response.json()


}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})