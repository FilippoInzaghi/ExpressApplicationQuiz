const gameBoard = document.getElementById('game-board');
const h2 = document.querySelector('h2')

function fillQuestionElements(data) {
    if (data.winner === true){
        gameBoard.style.display = 'none';
        h2.innerText = "Wygrałeś!!!";
        return;
    } else if(data.loser === true){
        gameBoard.style.display = 'none';
        h2.innerText = "Przegrałeś!!!";
        return;
    }
    document.getElementById('question').innerText = data.question;
    // for (const i in data.answers){
    //     document.getElementById(`answer${+i+1}`).innerText = data.answers[i]
    // }

    data.answers.forEach((element, index) => {
        document.getElementById(`answer${index+1}`).innerText = element
    });
}

function showNextQuestion(){
    fetch('/question', {
        method: 'GET'
    })
    .then(r => r.json())
    .then(data => {
        fillQuestionElements(data)
    })

};

showNextQuestion();

function handleAnswerFeedback(data){
    const goodAnswersSpan = document.getElementById('good-answers');
    goodAnswersSpan.innerText = data.goodAnswers;
    showNextQuestion();
}

function sendAnswer(answerIndex){
    fetch(`/answer/${answerIndex}`, {
        method: 'POST'
    })
    .then(r => r.json())
    .then(data => {
        console.log(data);
        handleAnswerFeedback(data)
    })
}

const buttons = document.querySelectorAll('.questionButton');
for(const button of buttons){
    button.addEventListener('click', (event) => {
        const answerIndex = event.target.getAttribute('data-answerId');
        sendAnswer(answerIndex);
        console.log(answerIndex, typeof answerIndex);
    });

}

function callToAFriend(){
    fetch('/help/friend', {
        method: 'GET'
    })
    .then(r => r.json())
    .then(data => {
        console.log(data);
    })
}

