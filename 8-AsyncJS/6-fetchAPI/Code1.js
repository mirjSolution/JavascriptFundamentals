async function fetchData(){
let data;
const response = await fetch('https://jsonplaceholder.typicode.com/users');
console.log(response);
if(response.ok){
    data = await response.json(); //will do the parsing of response to json
}
console.log(data);
}
fetchData();
