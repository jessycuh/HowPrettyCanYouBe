const urlParams = new URLSearchParams(window.location.search);
const choice = urlParams.get('choice');

let score = parseInt(localStorage.getItem('playerScore'), 10) || 0; 

// Update score based on choice
if (choice === 'pretty') {
    score += 20; 
} else if (choice === 'notpretty') {
    score -= 10; 
}

// Store the updated score back to localStorage
localStorage.setItem('playerScore', score); 

function displayScore() {
    document.getElementById("playerScore").textContent = score; 
}

window.onload = displayScore;
