let request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/comments');
request.responseType='json';
request.timeout=2000; //200
request.send();
request.onload = function(){
   if(request.status===200){
    console.log(request.response); 
   }else{
      console.log("Invalid request...")
   }
}
request.ontimeout = function(){
   console.log("Request timed out");
}
