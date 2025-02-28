let score = 0;
let currentNumber;

function generateQuestion() {
    currentNumber = Math.floor(Math.random() * 90) + 10; // Generate a double-digit number
    document.getElementById('question').innerText = `What is ${currentNumber} squared?`;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = currentNumber * currentNumber;

    if (userAnswer === correctAnswer) {
        score++;
        alert('Correct!');
    } else {
        score--;
        alert(`Wrong! The correct answer was ${correctAnswer}.`);
    }

    document.getElementById('score').innerText = `Score: ${score}`;
    document.getElementById('answer').value = '';
    generateQuestion();
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
}

function resetScore() {
    score = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
}

// Initialize the first question
generateQuestion();