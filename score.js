let score = localStorage.getItem('playerScore');

if (window.location.pathname.includes('menu.html')) {

    score = Math.floor(Math.random() * 50) + 1; 
    localStorage.setItem('playerScore', score); 
} else if (score === null) {

    score = 0; 
} else {

    score = parseInt(score, 10);
}

if (score > 200) {
    score = 200; 
}


function displayScore() {
    document.getElementById("playerScore").textContent = score;
}


window.onload = displayScore;
