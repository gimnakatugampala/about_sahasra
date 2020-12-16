const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const title = document.getElementById('title');
const wrapper = document.querySelector('.wrapper');
const questionCounter = document.getElementById('questionCounter');
const score = document.getElementById('score');

//CONSTANTS
let scoretext = 0;
const CORRECT_BONUS = 10/2;
const MAX_QUESTIONS = 22;

let shuffleQuestions
let currentQuestionIndex = 0;

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion()
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    title.classList.add('hide');
    wrapper.style.display = 'block';
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion();
    
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.questions
    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{  
            startButton.innerText = 'Finish & Restart';
            startButton.classList.remove('hide')
            score.innerText = 0;
    }

}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
        incrementScore(CORRECT_BONUS);
         Array.from(answerButtonElement.children).forEach(button =>{
             button.classList.add('disable')
         })
    }else{
        element.classList.add('wrong')
        Array.from(answerButtonElement.children).forEach(button =>{
            button.classList.add('disable')
        })
    }
}

function incrementScore(num){
    scoretext += num;
    score.innerText = scoretext; 
   
};


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        questions:"How many Kids will he have ?",
        answers:[
            {text:'20',correct:true},
            {text:'25',correct:false},
            {text:'10',correct:false},
            {text:'15',correct:false}
        ]
    },
    {
        questions:"If he has 1 hour to spend $1 million,where will he go first ?",
        answers:[
            {text:'Yamaha Center and SPA',correct:true},
            {text:'On Beauty Products',correct:false},
            {text:'On Science Equipments',correct:false},
            {text:'Donate All',correct:false},
        ]
    },
    {
        questions:"Is he Single or Taken ?",
        answers:[
            {text:'Taken',correct:false},
            {text:'Single 😒',correct:true}
        ]
    },
    {
        questions:"If he was a Cartoon Character ,what would he be ?",
        answers:[
            {text:'Dagaya',correct:false},
            {text:'Ben 10',correct:true},
            {text:'Dosthara Hoda Hitha',correct:false},
            {text:'Donald Duck',correct:false}
        ]
    },
    {
        questions:"If he was an Animal ,what would he be ?",
        answers:[
            {text:'Eagle',correct:true},
            {text:'Lion',correct:false},
            {text:'Horse',correct:false},
            {text:'Mouse',correct:false}
        ]
    },
    {
        questions:"His all time Favourite memory ?",
        answers:[
            {text:'Trip Gihin Manjula Sir Wamane damma eka',correct:true},
            {text:'Trip Gihin Kapila Sir Wamane damma eka',correct:false},
            {text:'Trip Gihin Sathsara Sir Wamane damma eka',correct:false},
            {text:'Trip Gihin Nath Sir Wamane damma eka',correct:false}
        ]
    },
    {
        questions:"Where would he hope to be in 10 years ?",
        answers:[
            {text:'In Australia',correct:true},
            {text:'Married',correct:false},
            {text:'Have as many kids',correct:false},
            {text:'In USA',correct:false}
        ]
    },
    {
        questions:"If he gets a wish what will be do ?",
        answers:[
            {text:'wish to all the dreams come true',correct:true},
            {text:'Travel to the Future',correct:false},
            {text:'Travel back to the past',correct:false},
            {text:'Be the Best Doctor in the world',correct:false}
        ]
    },
    {
        questions:"What Band he likes to join ?",
        answers:[
            {text:'Marians',correct:true},
            {text:'DADDY',correct:false},
            {text:'Misty',correct:false},
            {text:'WAYO',correct:false}
        ]
    },
    {
        questions:"If he is the president ,what would he change first?",
        answers:[
            {text:'Legalize Same Sex Marriage',correct:false},
            {text:'Name of the Country',correct:true},
            {text:'Legalize Drugs',correct:false},
            {text:'Take care of all Women 😂',correct:false}
        ]
    },
    {
        questions:"His Very First Crush?",
        answers:[
            {text:'Ishini Udunuwara',correct:true},
            {text:'Nuwanya',correct:false},
            {text:'Maheema Dewmi',correct:false},
            {text:'Aadhya Madulika',correct:false}
        ]
    },
    {
        questions:"What does his dream wife like for him ?",
        answers:[
            {text:'Strong Woman (Ganigen Guti kanawa)',correct:false},
            {text:'Emotional Woman',correct:false},
            {text:'Patient Woman',correct:true},
            {text:'Intelligent Woman',correct:false}
        ]
    },
    {
        questions:"Luckiest thing ever happen to him ?",
        answers:[
            {text:'Got one of the highest leadership in school',correct:false},
            {text:'Got a Laptop',correct:false},
            {text:'Got to know Minoli',correct:false},
            {text:'Got a Job at a TV channel(music director)',correct:true}
        ]
    },
    {
        questions:"One thing you don't know him ?",
        answers:[
            {text:'He can dance',correct:false},
            {text:'You know everything about him',correct:true},
            {text:'He can sing',correct:false},
            {text:'He can flirt',correct:false}
        ]
    },
    {
        questions:"His First Real Love ?",
        answers:[
            {text:'Ishini Udunuwara',correct:false},
            {text:'Mahindi',correct:false},
            {text:'Minolie',correct:true},
            {text:'Dewmi',correct:false}
        ]
    },
    {
        questions:"One person who has influenced you him?",
        answers:[
            {text:'Manjula Sir',correct:true},
            {text:'Sandro',correct:false},
            {text:'Dilusha',correct:false},
            {text:'Johnny Sins',correct:false}
        ]
    },
    {
        questions:"One schoolmate who has influnced him?",
        answers:[
            {text:'Migara',correct:false},
            {text:'Munaj',correct:false},
            {text:'Gimna',correct:true},
            {text:'Bryan',correct:false}
        ]
    },
    {
        questions:"A Schoolmate that he love to  work in the future ?",
        answers:[
            {text:'Aadhya',correct:false},
            {text:'Gimna',correct:true},
            {text:'Akash',correct:false},
            {text:'Roshan',correct:false}
        ]
    },
    {
        questions:"At what age will he get married  ?",
        answers:[
            {text:'30',correct:true},
            {text:'21',correct:false},
            {text:'Never gets Married',correct:false},
            {text:'40',correct:false}
        ]
    },
    {
        questions:"what will come to his mind when he hears the word 'minoli' ?",
        answers:[
            {text:'Feels like Hell',correct:false},
            {text:'Butterflies',correct:false},
            {text:'He used to feel something odd but now nothing',correct:true},
            {text:'Stil in love',correct:false}
        ]
    },
    {
        questions:"Most Used App ?",
        answers:[
            {text:'Youtube',correct:false},
            {text:'Instagram',correct:false},
            {text:'Whatsapps',correct:true},
            {text:'Netflix',correct:false}
        ]
    },
    {
        questions:"Most Used Website ?",
        answers:[
            {text:'pornhub.lk',correct:false},
            {text:'Horapoosa.lk',correct:false},
            {text:'clicknstudy.lk',correct:true},
            {text:'nasa.gov',correct:false}
        ]
    }
]