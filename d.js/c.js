


// step 1 addeventlisetener to the post button
document.getElementById('btn-post').addEventListener('click', function(){
    const newComnt = document.getElementById('new-comnt');
    const newCmnt = newComnt.value;

    const postContainer =document.getElementById('post-container');
    const p =document.createElement('p');
    p.innerText = newCmnt;
    postContainer.appendChild(p);
    newComnt.value = '';
    
})