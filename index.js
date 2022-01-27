const one=document.getElementsByClassName('one');
const two=document.getElementsByClassName('two');
const three=document.getElementsByClassName('three');
const createdAt=document.getElementsByClassName('createdAt')[0];
createdAt.innerHTML+=new Date();


one[0].addEventListener('click',()=>{
    window.location.href="quiz-components/quiz-first.html"
})
two[0].addEventListener('click',()=>{
    window.location.href="quiz-components/quiz-second.html"
})
three[0].addEventListener('click',()=>{
    window.location.href="quiz-components/quiz-third.html"
})



