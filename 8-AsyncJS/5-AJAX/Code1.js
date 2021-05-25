let request = new XMLHttpRequest();
request.open('GET','https://jsonplaceholder.typicode.com/comments');

request.send();
request.onload = function(){
   if(request.status===200){
    console.log(request.response); 
   }else{
      console.log("Invalid request...")
   }
   }
