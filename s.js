//   1st area

document.getElementById('dlt-confirm').addEventListener('keyup', function(event){
    const text =event.target.value;
    const dltBtn =document.getElementById('btn-dlt');
    if(text === 'delete'){
        dltBtn.removeAttribute('disabled');
    }

    else{
        dltBtn.setAttribute('disabled', true)
     }
    
})

document.getElementById('btn-dlt').addEventListener('click', function(){
    const secret =document.getElementById('info');
    secret.style.display = 'none'
    
    
})

// document.getElementById('delete').addEventListener('click', function(event){
//     event.target.parentNode.removeChild(event.target);


// })