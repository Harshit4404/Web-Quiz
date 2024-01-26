const questions = [
    {
        question: "What is the Hubble Space Telescope primarily used for?" ,
        answers:[
            {text: "Studying black holes" , correct: false},
            {text: "Observing distant galaxies" , correct: true},
            {text: " Monitoring the sun " , correct: false},
            {text: "Tracking asteroids" , correct: false},
        ]
    },
       
    {
        question: "What is the name of the spacecraft that successfully landed on Mars in February 2021?" ,
        answers:[
            {text: "Voyager 1" , correct: false},
            {text: "Curiosity" , correct: false},
            {text: "InSight" , correct: true},
            {text: "Hubble" , correct: false},
        ]
    },

    {
        question: "Which type of galaxy is the Milky Way?" ,
        answers:[
            {text: "Spiral Galaxy" , correct: true},
            {text: "Elliptical galaxy" , correct: false},
            {text: "Irregular galaxy" , correct: false},
            {text: "Lenticular galaxy" , correct: false},
        ]
    },

    {
        question: "What is the cosmic microwave background radiation?" ,
        answers:[
            {text: "Radiation from cosmic rays" , correct: false},
            {text: "Solar wind particles " , correct: false},
            {text: "Remnants of the Big Bang " , correct: true},
            {text: "Gamma-ray bursts" , correct: false},
        ]
    },
    {
        question: "What is the name of the theoretical boundary around a black hole beyond which nothing can escape?" ,
        answers:[
            {text: "Event horizon" , correct: true},
            {text: "Singularity" , correct: false},
            {text: "Photon Sphere" , correct: false},
            {text: "Accretion Disk" , correct: false},
        ]
    },
    {
        question: "Whar is the most abundant element in the Universe?",
        answers:[
            {text:"Oxygen" , correct: false},
            {text:"helium" , correct: false},
            {text :"Hydrogen" , correct: false},
            {text : "Carbon" , correct: true}
        ]
    },
    {
        question: "Which mission successfully landed the first humans on the Moon in 1969?",
        answers:[
            {text:"Apollo 11" , correct: true},
            {text:"Gemini 6" , correct: false},
            {text :"Mercury 4" , correct: false},
            {text : "Skylab 1" , correct: false}
        ]
    },
        {
        question: "What is the name of the phenomenon where a star collapses under its gravitational pull, resulting in a sudden increase in brightness?",
        answers:[
            {text:"Nova" , correct: false},
            {text:"Supernova" , correct: true},
            {text :"Black hole formation " , correct: false},
            {text : "Pulsar" , correct: false}
        ]
    },
        {
        question: "Which gas is most responsible for the vibrant colors of a nebula?",
        answers:[
            {text:"Oxygen" , correct: false},
            {text:"Hydrogen" , correct: true},
            {text :"Helium" , correct: false},
            {text : "Nitrogen" , correct: false}
        ]
    },
        {
        question: "What is the name of the mission launched by NASA to study the outer planets, including Jupiter and Saturn?",
        answers:[
            {text:"Cassini" , correct: false},
            {text:"Pioneer" , correct: false},
            {text :"Galileo" , correct: false},
            {text : "Voyager" , correct: true}
        ]
    },
    
];
const questionElement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showquestion();
}
function showquestion(){
    resetState();
    let currentquestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNo + ". " + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}


function resetState(){
    nextbutton.style.display = "none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild)
    }
}


function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct === "true";
    if(isCorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showquestion();
    }
    else{
        showscore();
    }
}
function showscore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML = "Play Again";
    nextbutton.style.display = "block";
}
nextbutton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();


