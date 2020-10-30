function Question(text,choies,answer){
 this.text = text;
 this.choies = choies;
 this.answer = answer;
}


Question.prototype.checkAnswer = function(answer){
    return this.answer === answer;
}

// Quiz Consturactor
function Quiz(questions){
this.questions = questions
this.score = 0
this.questionIndex = 0


}

//Quiz  prototype

Quiz.prototype.getQuestion = function(){
  return  this.questions[this.questionIndex]

}
// Quiz isFinish
Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex
}

//Quiz Guess

Quiz.prototype.guess = function(answer){
    var question = this.getQuestion()

    if(question.checkAnswer(answer)){
     this.score ++
    
    }
    this.questionIndex ++
}


var q1 = new Question("What is best programming",["C#","Javascript","python","asp.net"],'Javascript')
var q2 = new Question("What is the most populer language",["Javascript","C#","python","asp.net"],'Javascript')
var q3 = new Question("What is best modern programming language",["C#","Javascript","python","asp.net"],"Javascript")
var q4 = new Question("which one is front end ",["Pyhton","Javascript","HTML","CSS"],"Pyhton")
var questions = [q1,q2,q3,q4]


// Start QUİZ
var quiz = new Quiz(questions)

loadQuestion()


function loadQuestion(){
    if(quiz.isFinish()){
        showScore()   
    }else{
        var question = quiz.getQuestion()
        var choices = question.choies
        
        document.querySelector('#question').textContent = question.text

      for(let i = 0; i<choices.length; i++){ 
          var element = document.querySelector('#choice' +i)
          element.innerHTML = choices[i];
           guess('btn'+i,choices[i])
        }
        showProgress()
    }

}

function guess(id,guess){
    var btn = document.getElementById(id);
    
    btn.onclick = function(){
        quiz.guess(guess)
        loadQuestion()
    }

}


function showScore(){
       var html = `<h2>SCORE</h2><h4>${quiz.score}</4>`

      document.querySelector('.card-body').innerHTML = html 
}

function showProgress(){
    var  totalQuestion = quiz.questions.length
    var questionNumber = quiz.questionIndex+1

 var html =  document.querySelector('#progress').innerHTML = 'Question '+questionNumber +' of '+totalQuestion 

/*
if(totalQuestion == questionNumber){
    document.querySelector('#progress').innerHTML = 'bitti'
}else{
    document.querySelector('#progress').innerHTML = html
}
*/

}

