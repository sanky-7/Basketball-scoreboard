let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let countHome = 0
let countGuest = 0

function homeIncrement1(){
    countHome++
    homeScore.textContent = countHome
}

function homeIncrement2(){
    countHome += 2
    homeScore.textContent = countHome
}

function homeIncrement3(){
    countHome += 3
    homeScore.textContent = countHome
}

function guestIncrement1(){
    countGuest++
    guestScore.textContent = countGuest
}

function guestIncrement2(){
    countGuest += 2
    guestScore.textContent = countGuest
}

function guestIncrement3(){
    countGuest += 3
    guestScore.textContent = countGuest
}

function newGame(){
    countHome = 0
    countGuest = 0
    homeScore.textContent = countHome
    guestScore.textContent = countGuest
}