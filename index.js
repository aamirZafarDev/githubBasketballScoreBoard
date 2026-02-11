let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let homeScoreCount = 0
let guestScoreCount = 0

function plus1ScoreHome() {
    homeScoreCount += 1
    homeScore.textContent = homeScoreCount 
}

function plus2ScoreHome() {
    homeScoreCount += 2
    homeScore.textContent = homeScoreCount
}

function plus3ScoreHome() {
    homeScoreCount += 3
    homeScore.textContent = homeScoreCount
}

function plus1ScoreGuest() {
    guestScoreCount +=1
    guestScore.textContent = guestScoreCount 
}

function plus2ScoreGuest() {
    guestScoreCount +=2
    guestScore.textContent = guestScoreCount 
}

function plus3ScoreGuest() {
    guestScoreCount +=3
    guestScore.textContent = guestScoreCount  
}