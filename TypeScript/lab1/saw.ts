document.write("hello world");
var myname="Saurabh";
var age:number=22;
var canvote:boolean=true;
document.write("  Hello!!");
//document.getElementById("a").innerHTML="I am"+age;
document.write("<br><br>"+"type of name is "+typeof(name));
document.write("<br><br>"+"type of age is "+typeof(age));
document.write("<br><br>"+"type of canvote is "+typeof(canvote));
const pi=3.14;
//pi=22;
document.write("<br>PI is a "+typeof(pi)+" "+pi);
var randomarr=[5,6,55,6,5];
for(var val in randomarr){
document.write("<br>"+val)
}

var mappedarr=randomarr.map(Math.sqrt);
for(var i in mappedarr)
{
document.write("<br>"+i)    
}

 
 var addone=(x)=>
 {
     return x+1;
 }
 console.log(addone(1));
 var addone=(x)=>x+2;
  console.log(addone(1));


  var getsum=function(num1:number,num2:number):number
  {
return num1+num2;
  }
  var ans:number=getsum(2,2);
  console.log(getsum(2,2));
  console.log(ans);



  var total=[2,3,5].reduce(
      function(a,b)
      {
          return a+b;
      }
  );
  console.log(total);


  var sumall = function(...nums:number[]):void
  {
      var sum=nums.reduce((a,b)=>a+b);
      document.write("<br>"+sum);
  }
  sumall(2,3);
  sumall(2,3,4);