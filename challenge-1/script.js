const body = document.querySelector('body');


function changeColor(){
    if(body.style.background==='rgb(179, 49, 206)'){
        body.style.background='rgb(255, 151, 15)'
        console.log(body);
    }else {body.style.background='rgb(179, 49, 206)'}
    
    
    // body.classList.toggle('color')
}