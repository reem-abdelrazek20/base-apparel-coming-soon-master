
var button=document.getElementById(`button`);
var input =document.querySelector(`[name="email"]`);
var Eerror=document.querySelector(`.error`)
var re=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
button.addEventListener(`click`,
function(){
    let email=false;
if(input.value!=="" ){
    email=true
}
    if(email===false||!input.value.match(re)){
    Eerror.innerHTML=`please pravide a valid email`
    }
    else{;
        alert("hi" )}
    }
)



