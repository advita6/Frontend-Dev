/* console.log("Dal");
console.log("Mutton");
console.log("Rice");

console.log("Dal");

setTimeout(()=>
{
    console.log("Rice");
},3000);

console.log("Mutton"); */

function calculate(a,b,callback)
{
    callback(a+b)
}

calculate(10,20,(result)=>
{
    console.log("The result is: "+result);
})  

