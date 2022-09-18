let k;
let count = 0;

function isprime(num) {
  k=((num+1)/2);
  if(num === 0 || num < 0)
   {
     return `${num}  number is not priem`
   }
     else if(num === 2 || num === 3)
   {
    return `${num}  number is  priem`
   }
    else if(num % 2 === 0 || num === 1)
   {
    return `${num}  number is not priem`
   }
     else (isprime)
     for(let i = 3; i<=k; i=i+2)
     {
      if(num % i == 0)
      {
        count++;
        if(count<2)
       {
        return `${num} number is not priem`
       }
      }
   
     } 
     return `${num} number is  priem`
 } 

const  http  =  require('http')
const port = 3333
const server  =  http.createServer((req, res) =>{
  res.writeHead(200);
  res.end(isprime(Number(req.url.split("/")[1])));
})

server.listen(port, () =>{
  console.log('Server listening on: http://localhost:%s', port)
})