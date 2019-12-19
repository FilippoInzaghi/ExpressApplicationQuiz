const express = require('express');
const colors = require('colors')

const app = express();


app.listen(3000, (req, res) => {
    console.log('Server is listening at http://localhost:3000 \nLet\'s play a game'.yellow);
});


app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, 'public')
    })
})

let goodAnswers = 0;

let callToAFriendUsed = false;

let questionToAudienceUsed = false;

let halfOnHalfUsed = false;

const questions = [
    {
        question: 'Jaki jest najlepszy język porogramowania na świecie?',
        answers: ['C++', 'Fortran', 'JavaScript', 'Java'],
        correctAnswer = 2,
    },
    {
        question: 'Jak ma na imię Monika Broda?',
        answers: ['Janek', 'Kasia', 'Monika', 'Ania'],
        correctAnswer = 2,
    },
    {
        question: 'II rozbiór Polski - kiedy?',
        answers: ['1655', '1793', '1795', '1772'],
        correctAnswer = 3,
    },
    {
        question: 'Jaki jest najlepszy język porogramowania na świecie?',
        answers: ['C++', 'Fortran', 'JavaScript', 'Java'],
        correctAnswer = 2,
    },
    {
        question: 'Jaki jest najlepszy język porogramowania na świecie?',
        answers: ['C++', 'Fortran', 'JavaScript', 'Java'],
        correctAnswer = 2,
    },
    {
        question: 'Jaki jest najlepszy język porogramowania na świecie?',
        answers: ['C++', 'Fortran', 'JavaScript', 'Java'],
        correctAnswer = 2,
    }

]
