// Model
var QUESTIONS = [
    {
        text: '<:48:x<:65:=<:6C:$=$=$$~<:03:+$~<:ffffffffffffffbd:+$<:ffffffffffffffb1:+$<:57:~$~<:18:x+$~<:03:+$~<:06:x-$x<:0e:x-$=x<:43:x-$',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 0
    },
    {
        text: '+0+0+0+0+0+0+0+2)+0+0+9)+7))+3)-0-0-0-0-0-0-0-9)+0+0+0+0+0+0+0+0+7)-8)+3)-6)-8)-7-0-0-0-0-0-0)',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 1
    },
    {
        text: '*6*3p*4*3*2*0p*2*1*0pp>0*1*0p*5*4*0p*5*4*2*1*0p*4*3p*1*0p/+0p+0*6*5*2p+0*5*0p',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 2
    },
    {
        text: ']xhhhhooooooooohhhhhhxooooooooxooooooxjjjxhoooohhhxhohhhhhhhxhhhhjjjhhhxhhhhooooooooohhhhhhxjjjxxjjjjjjjxjhhhhxjhhhhhhhhjjjhh~',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 3
    }
];

var QuestionModel = function() {
    this.QUESTIONS = QUESTIONS;
    // user begins with score 0
    this.score = 0;
    // quiz begins on first question, which is QUESTIONS[0]
    this.currentQuestion = 0;
    // method that changes the question to the next question
    // questionContainer is $(".question") later on...
    this.nextQuestion = function(questionContainer){
        // 
        var question = this.QUESTIONS[this.currentQuestion];
        // puts the question text into the questionContainer 
        questionContainer.text(question.text);
    };
    this.playAgain = function(){

    };
};
// View handles the visual display of the Model data
var QuizView = function(questionContainer, answerContainer, scoreContainer, nextButton){
    this.questionContainer = questionContainer;
    this.answerContainer = answerContainer;
    this.scoreContainer = scoreContainer;
    this.nextButton = nextButton;
};
// The Controller passes the Model and View as arguements 
var QuizController = function(questionModel, quizView){
    this.nextQuestion = questionModel.nextQuestion.bind(questionModel, quizView.questionContainer);
    quizView.nextButton.click(this.nextQuestion);
};
$(document).ready(function() {
    // creating a new model called QuestionModel
    var model = new QuestionModel();
    // creating a new view called QuizView
    // passing in $(".question") as the questionContainer, $(".answers") as answerContainer, etc. 
    var view = new QuizView($(".question"), $(".answers"), $(".score"), $(".next"));
    // creating a new contoller called QuizController
    var controller = new QuizController(model, view);
});

// var questionsPageElement = $('.questions-page');
// var questionCurrentElement = $('.question-current');
// var questionsTotalElement = $('.questions-total');
// var questionElement = $('.question');
// var answersElement = $('.answers');

// var resultsPageElement = $('.results-page');
// var scoreElement = $('.score');
// var restartButtonElement = $('.restart-button');

// var showResults = function() {
//     questionsPageElement.hide();
//     resultsPageElement.show();
// };

// var showQuestions = function() {
//     resultsPageElement.hide();
//     questionsPageElement.show();
// };

// var resetScore = function() {
//     scoreElement.text(0);
// };

// var increaseScore = function() {
//     var score = parseInt(scoreElement.text(), 10);
//     scoreElement.text(score + 1);
// };

// var setQuestion = function(questionIndex) {
//     var question = QUESTIONS[questionIndex];
//     questionCurrentElement.text(questionIndex);
//     questionElement.text(question.text);
//     answersElement.empty();
//     for (var i=0; i<question.answers.length; i++) {
//         var answer = question.answers[i];
//         answersElement.append('<li><button type="button">' + answer + '</button></li>');
//     }
// };

// answersElement.on('click', 'button', function() {
//     var choice = $(this).parent().index();
//     var questionIndex = parseInt(questionCurrentElement.text(), 10);
//     var question = QUESTIONS[questionIndex];
//     if (question.correct === choice) {
//         increaseScore();
//     }

//     if (questionIndex + 1 < QUESTIONS.length) {
//         setQuestion(questionIndex + 1);
//     }
//     else {
//         showResults();
//     }
// });

// restartButtonElement.click(function() {
//     setQuestion(0);
//     resetScore();
//     showQuestions();
// });

// $(document).ready(function() {
//     questionsTotalElement.text(QUESTIONS.length);
//     setQuestion(0);
// });
