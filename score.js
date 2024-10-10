let score = localStorage.getItem('playerScore');

// Check if we're on the specific page (e.g., 'menu.html' in this case)
if (window.location.pathname.includes('menu.html')) {
    // Reset score on this specific page only
    score = Math.floor(Math.random() * 10) + 1; // Random score between 1-50
    localStorage.setItem('playerScore', score); // Store the new score
} else if (score !== null) {
    // Parse score for other pages
    score = parseInt(score, 10);
}

function displayScore() {
    document.getElementById("playerScore").textContent = score; // Display the score
}

window.onload = displayScore;
