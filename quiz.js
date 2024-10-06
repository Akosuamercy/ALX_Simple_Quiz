function checkAnswer(params) {
    let correctAnswer = "4";
    let userAnswer = document.querySelector('[name="quiz"]:checked')?.value;
    let feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    }

    else{
        feedbackElement.textContent = "That's incorrect. Try again";
    }
        
}
let submit = document.getElementById("submit-answer");
    submit.addEventListener('click',checkAnswer);