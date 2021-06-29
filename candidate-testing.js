const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer;
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ','Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? '];
let correctAnswers = ["Sally Ride", "true", "40", "trajectory", "3"];
let candidateAnswers = [];
let correctNum = 0

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
let info = input.question ("What is your name? ")
  candidateName = info ;
  console.log ("Welcome, " + info)
  
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++){
    let candidateInput = input.question (questions[i])
    candidateAnswers.push(candidateInput)
  
    if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
      //console.log("Correct!")
      correctNum += 1 
    } else {
      //console.log("incorrect")
    }    
  }
}
  //console.log(candidateAnswers)


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

// let correctNum = 0

// for (i = 0; i < questions.length; i++){
//   //console.log(candidateAnswers[i])
//   //console.log(correctAnswers[i])
//   if (candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
//     console.log("Correct!")
//     correctNum += 1 
  
  
//   }
//  else {
//    console.log("incorrect")
//  }
// }


//console.log(correctNum)
//console.log(correctAnswers)


  let grade = (correctNum) / (questions.length) * 100 ;
  let passFail = ""
    if (grade >= 80) {
      passFail = "PASSED"
    } else {
      passFail = "FAILED"
    }

  let status = (`>>> Overall Grade: ${grade}% (${correctNum} of ${questions.length} responses correct) <<< \n >>> Status: ${passFail} <<<`)
   return status
}

function quizResults() {
  let allQuestions = ""
  for (i=0; i < questions.length; i++){
    let questionLine = `${i+1}) ${questions[i]}`
    let yourAnswer = `Your Answer: ${candidateAnswers[i]}`
    let correctAnswer = `Correct Answer: ${correctAnswers[i]}`
    let wholeAnswer = `${questionLine} \n ${yourAnswer} \n ${correctAnswer}`
    allQuestions = allQuestions + wholeAnswer + "\n"+"\n"
  } 
  console.log("\n \n")
  console.log("Candidate Name: " + candidateName)
  console.log(allQuestions)
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  //gradeQuiz(this.candidateAnswers);
  quizResults()
  console.log(gradeQuiz())
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};