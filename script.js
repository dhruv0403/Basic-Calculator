console.log("Welcome To My Calculator");
let string="";
let buttons=document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='Del'){
            string=string.substring(0,string.length-1);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='+/-'){
            string="-"+string;
            document.querySelector('input').value=string;
        }
        else{
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})