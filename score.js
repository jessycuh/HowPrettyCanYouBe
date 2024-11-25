let score = localStorage.getItem('playerScore');

function displayScore() {
    document.getElementById("playerScore").textContent = score;
}

if (window.location.pathname.includes('index.html')) {
    score = Math.floor(Math.random() * 50) + 1; 
    localStorage.setItem('playerScore', score); 
} else if (score === null) {
    score = 0; 
} else {
    score = parseInt(score, 10);
}

if (score > 100) {
    score = 90; 
}


// Store the changes to the score
localStorage.setItem('playerScore', score);

window.onload = displayScore;
