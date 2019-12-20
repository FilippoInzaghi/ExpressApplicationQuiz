function gameRoutes(app){
    let goodAnswers = 0;

    let isGameOver = false;

    let callToAFriendUsed = false;
    
    let questionToAudienceUsed = false;
    
    let halfOnHalfUsed = false;
    
    const questions = [
        {
            question: 'Jaki jest najlepszy język porogramowania na świecie?',
            answers: ['C++', 'Fortran', 'JavaScript', 'Java'],
            correctAnswer: 2,
        },
        {
            question: 'Jak ma na imię Monika Broda?',
            answers: ['Janek', 'Kasia', 'Monika', 'Ania'],
            correctAnswer: 2,
        },
        {
            question: 'II rozbiór Polski - kiedy?',
            answers: ['1655', '1793', '1795', '1772'],
            correctAnswer: 3,
        },
        {
            question: 'Zwycięzca Złotej piłki 2019?',
            answers: ['Mbappe', 'Robert Lewandowski', 'Messi', 'Ronaldo'],
            correctAnswer: 2,
        },
        {
            question: 'W którym roku Polska dołączyła do Unii Eurpoejskiej?',
            answers: ['2004', '2006', '2013', '1999'],
            correctAnswer: 0,
        },
        {
            question: '"Hola" to "cześć" w którym z podanych języków?',
            answers: ['Francuski', 'Hiszpański', 'Włoski', 'Niemiecki'],
            correctAnswer: 1,
        }
    
    ];
    
    app.get('/question', (req, res) => {
        if (goodAnswers === questions.length){
            res.json({
                winner: true
            }) 
        } else if (isGameOver){
            res.json({
                loser: true
            })
        } 
        
        else {
            const nextQuestion = questions[goodAnswers];
            const {question, answers} = nextQuestion;
            
            res.json({
                question, answers
            })
            }
    })

    app.post('/answer/:answerId', (req, res) => {

        if (isGameOver) res.json({
            loser: true
        })

        const {answerId} = req.params;
        console.log(req.params, answerId);

        const presentQuestion = questions[goodAnswers];

        console.log(presentQuestion.correctAnswer === Number(answerId));

        const isCorrectAnswer = presentQuestion.correctAnswer === Number(answerId);

        if (isCorrectAnswer){
            goodAnswers++
        } else {
            isGameOver = true
        }

        res.json({
             correct: isCorrectAnswer,
             goodAnswers
         })

    })
    
    app.get('/help/friend', (req,res) => {
        if (callToAFriendUsed){
            return res.json({
                text: 'Już użyłeś telefonu do przyjaciela'
            })
        }
        const doesFriendKnowAnswer = Math.random() > 0.25;
        const question = questions[goodAnswers];

        res.json({
            text: "Wydaje mi się, że odpowiedż to " + doesFriendKnowAnswer ? question.answers[question.correctAnswer] : `Nie jestem pewny, ale możliwe, że poprawna odpowiedź to `
        })
    })

}

module.exports = gameRoutes;