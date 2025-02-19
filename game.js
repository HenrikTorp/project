document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const paddle = document.getElementById('paddle');
    const ball = document.getElementById('ball');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let ballSpeed = 2;
    let ballDirection = 1;

    // Move paddle with mouse
    gameContainer.addEventListener('mousemove', (e) => {
        const rect = gameContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        paddle.style.left = `${mouseX - paddle.offsetWidth / 2}px`;
    });

    // Ball falling logic
    function moveBall() {
        const ballRect = ball.getBoundingClientRect();
        const paddleRect = paddle.getBoundingClientRect();
        const gameRect = gameContainer.getBoundingClientRect();

        // Check if ball hits the paddle
        if (
            ballRect.bottom >= paddleRect.top &&
            ballRect.left >= paddleRect.left &&
            ballRect.right <= paddleRect.right
        ) {
            ballDirection = -1;
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            ballSpeed += 0.5; // Increase speed
        }

        // Check if ball hits the top
        if (ballRect.top <= gameRect.top) {
            ballDirection = 1;
        }

        // Check if ball hits the bottom (game over)
        if (ballRect.bottom >= gameRect.bottom) {
            alert('Game Over! Your score is ' + score);
            document.location.reload();
        }

        // Move the ball
        ball.style.top = `${ball.offsetTop + ballSpeed * ballDirection}px`;
        requestAnimationFrame(moveBall);
    }

    moveBall();
});