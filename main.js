window.addEventListener('DOMContentLoaded', () => {


    const choices = document.querySelectorAll('.choice')
    const score = document.querySelector('#score')
    const modal = document.querySelector('.modal')
    const result = document.querySelector('#result')
    const restart = document.querySelector('#restart')
    scoreBoard = {
        player: 0,
        computer: 0
    }


    // playGame
    function play(event) {
        restart.style.display = 'inline-block'
        const playerChoice = event.target.id // бу бизани танловимиз, чтобы бизани id компни id си билан бир хил булиб колмаслиги учун
        const computerChoice = getComputerChoice()
        const winner = getWinner(playerChoice, computerChoice)
        showWinner(winner, computerChoice)
    }


    // getComputerChoice
    function getComputerChoice() {
        const random = Math.random()
        if (random < 0.34) {
            return 'rock'
        } else if (random <= 0.67) {
            return 'paper'
        } else {
            return 'scissors'
        }
    }


    //getWinner
    function getWinner(player, computer) {
        if (player === computer) {
            return 'draw'
        } else if (player === 'rock') {
            if (computer === 'paper') {
                return 'computer'
            } else {
                return 'player'
            }
        } else if (player === 'paper') {
            if (computer === 'scissors') {
                return 'computer'
            } else {
                return 'player'
            }
        } else if (player === 'scissors') {
            if (computer === 'rock') {
                return 'computer'
            } else {
                return 'player'
            }
        }
    }


    // showWinner
    function showWinner(winner, computerChoice) {
        if (winner === 'player') {
            scoreBoard.player++
                result.innerHTML = `
            <h1 class="text-win">You win!</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
        } else if (winner === 'computer') {
            scoreBoard.computer++
                result.innerHTML = `
            <h1 class="text-lose">You lose(</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
        } else {
            result.innerHTML = `
            <h1>It's a draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer choose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `
        }

        score.innerHTML = `
        <p> Player: ${scoreBoard.player}</p>
        <p> Computer: ${scoreBoard.computer}</p>
    `

        modal.style.display = 'block'
    }


    // restartGame
    function restartGame() {
        scoreBoard.player = 0
        scoreBoard.computer = 0
        score.innerHTML = `
        <p> Player: ${scoreBoard.player}</p>
        <p> Computer: ${scoreBoard.computer}</p>
    `
    }


    // clearModal
    function clearModal(event) {
        if (event.target === modal) {
            modal.style.display = 'none'
        }
    }


    // EventListeners
    choices.forEach(choice => choice.addEventListener('click', play))
    window.addEventListener('click', clearModal)
    restart.addEventListener('click', restartGame)




})