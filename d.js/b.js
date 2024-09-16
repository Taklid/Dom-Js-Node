// first area

function handelOnClick(){
    const evenHandel =document.getElementById('d-list');
    evenHandel.innerText='cng the topic';
    document.body.style.color='red';
}


// option 2


document.getElementById('cng-text').addEventListener('click', function(){
    const evenHandel =document.getElementById('d-list');
    evenHandel.innerText='TEXT UPDATED BY ADD'
    document.body.style.color='purple';
    document.body.style.textShadow='2px 1px';
})



document.getElementById('btn-update').addEventListener('click', function(){
    const inputField =document.getElementById('input-field');
    const inpuText = inputField.value;
    const p =document.getElementById('input-text');
    p.innerText=inpuText;
    inputField.value='';
    document.body.style.color='red';


})