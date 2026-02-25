let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function addHome(points) {
    homeScore += points
    homeScoreEl.textContent = homeScore
    updateLeader()
}

function addGuest(points) {
    guestScore += points
    guestScoreEl.textContent = guestScore
    updateLeader()
}

function resetGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
    updateLeader()
}

function updateLeader() {
    homeScoreEl.classList.remove("leading")
    guestScoreEl.classList.remove("leading")

    if (homeScore > guestScore) {
        homeScoreEl.classList.add("leading")
    } else if (guestScore > homeScore) {
        guestScoreEl.classList.add("leading")
    }
}