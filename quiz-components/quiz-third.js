const mainBody=document.getElementsByClassName("body-three")[0];
const timer =document.createElement('div');
timer.innerText="120";
timer.classList.add("wholeQuizTimer");
mainBody.appendChild(timer);
const backToMenu=document.getElementsByClassName("back-to-menu");
const box=document.getElementsByClassName("box");
const questionCard=document.getElementsByClassName('ques');
const visibleQues=document.getElementsByClassName('visible-ques');
const hidden=document.getElementsByClassName('hidden');
backToMenu[0].addEventListener('click',()=>{
    console.log("clicked");
    window.location.href="../index.html";
})

const data=[
  {
    "title": "General quizzes for testing purposes - part 3",
    "data": [
      {
        "id": "af0153c2-9860-48f2-bfd2-641111d59214",
        "question": " In the United Kingdom, what is the day after Christmas known as?",
        "options": [
          "Boxing Day",
          "Cricket Day",
          "Wrestling Day",
          "Hockey Day"
        ],
        "answer": "Qm94aW5nIERheQ=="
      },
      {
        "id": "17870cb8-12fb-447e-82ed-78c655e5dfd7",
        "question": "Which country consumes the most chocolate per capita?",
        "options": [
          "Switzerland",
          "U.S",
          "Netherlands",
          "Africa"
        ],
        "answer": "U3dpdHplcmxhbmQ="
      },
      {
        "id": "130f4b45-4925-4fa5-8ac2-9af6d59a330d",
        "question": "Which of Shakespeare’s plays is the longest?",
        "options": [
          "Hamlet",
          "Cutlet",
          "Mamooth",
          "none"
        ],
        "answer": "SGFtbGV0"
      },
      {
        "id": "bb9413cd-9c7e-429a-b311-a717608b192b",
        "question": "What is the loudest animal on Earth?",
        "options": [
          "The sperm whale",
          "Blue whale",
          "Mamooth",
          "none"
        ],
        "answer": "VGhlIHNwZXJtIHdoYWxl"
      },
      {
        "id": "d2652c20-bbba-4e50-b962-d32d77917f47",
        "question": "I Know Why the Caged Bird Sings’ is an autobiography about the early years of what inspirational African-American writer and poet?",
        "options": [
          "Maya Angelou",
          "Nightmarish",
          "The Great Dane",
          "none"
        ],
        "answer": "TWF5YSBBbmdlbG91"
      }
    ],
    "createdAt": "Mon, 12 Jan 2022 11:41:13 GMT",
    "timePerQuestion": "30",
    "totalTime": "120",
    "type": "quiz"
  }
]

for(let i=0;i<visibleQues.length;i++){
  visibleQues[i].innerHTML=`<p>${data[0].data[i].question}<br><button class="solve">SOLVE</button></p>`
}
var correctAnswer=0;
var inCorrectAnswer=0;
const solveBtn=document.getElementsByClassName('solve');
for(let i=0;i<solveBtn.length;i++){
  solveBtn[i].addEventListener('click',()=>{
      var time=30;
      solveBtn[i].style.display="none";
      hidden[i].style.display="inherit";
      hidden[i].innerHTML=`<div><form>
      <input type="radio" id=${data[0].data[i].options[0]} value="${data[0].data[i].options[0]}" name="ques${i}">
      <label>${data[0].data[i].options[0]}</label>
      <input type="radio" id=${data[0].data[i].options[1]} value="${data[0].data[i].options[1]}" name="ques${i}">
      <label>${data[0].data[i].options[1]}</label>
      <input type="radio" id=${data[0].data[i].options[2]} value="${data[0].data[i].options[2]}" name="ques${i}">
      <label>${data[0].data[i].options[2]}</label>
      <input type="radio" id=${data[0].data[i].options[3]} value="${data[0].data[i].options[3]}" name="ques${i}">
      <label>${data[0].data[i].options[3]}</label>
      </form><div id=${i} class="timer">${time}</div>
      <button id= btn${i} class="submit">SUBMIT</button>
      <div id=correctAns${i} class="correctAns"> correct answer: ${atob(`${data[0].data[i].answer}`)}</div></div>`;
     const quesTimer=document.getElementById(`${i}`);
     const submitbtn=document.getElementById(`btn${i}`);
     const correctAns=document.getElementById(`correctAns${i}`);
     submitbtn.addEventListener("click",()=>{
       console.log("clicked");
        const ans=document.querySelector(`input[name=ques${i}]:checked`);
        if(ans.value.localeCompare(atob(`${data[0].data[i].answer}`))===0){
          correctAnswer++;
        }
       else inCorrectAnswer++;
       
        correctAns.style.display="inherit";
        clearInterval(ob);
      if(correctAnswer+inCorrectAnswer===5)
      {
          clearInterval(obj);
      mainBody.innerHTML=`<div class="wholeQuiz"> Your score is ${correctAnswer}/5</div>`;
      }
      
     })

  const ob=  setInterval(()=>{
      if(time===0){
      clearInterval(ob);
      hidden[i].style.display="none";
      return;}
          setTimeout(() => {
              time--;
              quesTimer.innerHTML=`${time}`;
          },0);
          
      },1000);
          
      
      
  })
}
var timerQuiz=120;
const obj=setInterval(()=>{
  if(timerQuiz===0){
      clearInterval(obj);
      mainBody.innerHTML=`<div class="wholeQuiz">TIME IS UP ! Your score is ${correctAnswer}/5</div>`;
      return;
  }
  setTimeout(()=>{
    timerQuiz--;
      timer.innerHTML=timer.innerHTML-1;
  },0)
},1000);