
// function ChangeColor()
// {if(document.body.style.backgroundColor="white")
// {
//     document.body.style.backgroundColor="black"
//     document.body.style.color="white"
// }
// else
// {
//     document.body.style.backgroundColor="white"
//     document.body.style.color="black"
// }
// }
   









var daytime=new Date().getHours();
console.log(daytime)

if(daytime>=5 && daytime<=12 )
{
    alert("Good Morning")
   document.body.style.backgroundColor="white"
}
    else if(daytime>=13 && daytime<=18 )
    {
        alert("Good Afternoon")
       document.body.style.backgroundColor="yellow"
    }

    else{
        alert("Good Evening")
        document.body.style.backgroundColor="grey"
    }
    


var r=5;
var square=Math.trunc(Math.PI*r*r);
console.log(square)