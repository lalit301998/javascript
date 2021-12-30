/*function sum(a, b) {
    return a + b;
  }
  
  alert(`1 + 2 = ${sum(1, 2)}.`);
 
async function harry()
{
    console.log('inside the harry function')
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json;
    console.log('users resolved');
    return users;
} 
let a= harry();
console.log('after calling harry');

console.log(a);

a.then(data=>console.log(data));
*/
var sum = function(a,b)
{
return a+b;
}
alert(sum(10,20));
