let request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/comments');
request.responseType='json';

request.send();
request.onreadystatechange=function(){
if (request.readyState===4 && request.status===200){
   console.log(request.response); 
}
}
