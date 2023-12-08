const questions = [
    {
        question: `Which animal is known as the 'Ship of the Desert"?`,
        answer: [{text: "Desert bighorn sheep",correct:"False"},
                 {text:" Camel ",correct:"True"}],
    },
    {
        question: `How many letters are there in the English alphabet?`,
        answer:[{text:`30`,correct:`False`},
                {text:`26`,correct:`True`}],
    },
    {
        question: `Baby frog is known as`,
        answer:[{text:`Tadpole`,correct:`True`},
                {text:`Froggie`,correct:`False`}],
    },
]

const question = document.querySelector('.js-question');
const answer_list = document.querySelector('.js-answer-btn');
const next = document.querySelector('.js-next-btn');

let questionIndexNo = 0;
let score = 0;

function startquizz(){
    questionIndexNo = 0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    reset();
    let currentQuestion = questions[questionIndexNo];
    let questionNumber = questionIndexNo + 1;
    question.innerHTML = questionNumber + '. '+ currentQuestion.question;
    let option = 1; 
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = option+'. '+answer.text;
        button.classList.add('answer-btn');
        answer_list.appendChild(button);
        option++;
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',select_answer)
    });
}

//remove previous content
function reset(){
    next.style.display = 'none';
    while(answer_list.firstChild){
        answer_list.removeChild(answer_list.firstChild);
    }      
}
// let currentQuestion = questions[0];
// console.log(currentQuestion.question);
// currentQuestion.answer.forEach(answer =>{
//     console.log(answer.text);
// })

function select_answer(e){
    const selectBtn = e.target;
    const iscorrect = selectBtn.dataset.correct === 'True';
    if(iscorrect){
        selectBtn.classList.add('correct');
        score++;
    }
    else{
        selectBtn.classList.add('incorrect');
    }
    Array.from(answer_list.children).forEach(button=>{
        if(button.dataset.correct === 'True'){
            button.classList.add('correct');
        }
        button.disabled = true;
    })
    next.style.display = "block";
}

function showScore(){
    reset();
    question.innerHTML = `your score is ${score} out of ${questions.length}`;
    next.innerHTML = "Play Again";
    next.style.display = 'block';
}

function handleNextButton(){
    questionIndexNo++;
    if(questionIndexNo<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

next.addEventListener('click',()=>{
    if(questionIndexNo<questions.length){
        handleNextButton();
    }
    else{
        startquizz();
    }
})

startquizz();
