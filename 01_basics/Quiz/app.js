const questionsArray = [ 
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Manager", "Display Output Mode", "Document Oriented Map"],
        answer: "Document Object Model"
    },
    {
        question: "Which keyword declares a variable that can't be reassigned?",
        options: ["var", "let", "const", "static"],
        answer: "const"
    },
    {
        question: "What does typeof [] return in JavaScript?",
        options: ["array", "object", "list", "undefined"],
        answer: "object"
    },
    {
        question: "Which method adds an item to the end of an array?",
        options: ["push()", "pop()", "shift()", "append()"],
        answer: "push()"
    } 
]

const question = document.getElementById("question")
const options = document.getElementById("options")
const scoreEl = document.getElementById("score")
const nextBtn = document.getElementById("next-btn")


let index = 0 ;
let score = 0
scoreEl.textContent = 'Score: ' + score;
        

function displayQuestion(){
    const firstQuestion = questionsArray[index]
    question.textContent = firstQuestion.question

    const buttons = options.querySelectorAll(".option")

    buttons.forEach((button,i)=>{
        button.textContent = firstQuestion.options[i]
    })
   

}

displayQuestion()


options.addEventListener("click",(event)=>{
    if(event.target.classList.contains('option')){

        const userSelectedAns = event.target.textContent;
        const answer = questionsArray[index].answer

        if(userSelectedAns === answer){

            event.target.style.background = "green"
            score++
            scoreEl.textContent = 'Score: ' + score;
        }
        else{
            event.target.style.background = "red"
            const buttons = options.querySelectorAll(".option")
            buttons.forEach((btn) => {
             if(btn.textContent === answer) {
                 btn.style.background = "green"
                }
    })
            


        }
        const buttons = options.querySelectorAll(".option")
        buttons.forEach((but)=>{
            but.disabled = true
        })

    }

})


nextBtn.addEventListener("click",()=>{

    index++;
    if(index < questionsArray.length){

        displayQuestion()
        const buttons = options.querySelectorAll(".option")
        buttons.forEach((but)=>{
            but.disabled = false
            but.style.background = ""
        })
    }
    else{
        document.getElementById("quiz-container").innerHTML = `
        <h1>Quizz completed </h1>
        <p>Your score: ${score} / ${questionsArray.length}</p>
        <button onclick="location.reload()">Play Again</button>  
        `
    }

})