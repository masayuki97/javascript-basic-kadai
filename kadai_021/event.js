// JavaScript Document

const btnclick=document.getElementById('btn');
btnclick.addEventListener('click',()=>{
    setTimeout(()=>{
        const myText=document.getElementById('text');
        myText.textContent='ボタンをクリックしました';         
    },2000);
   
});




