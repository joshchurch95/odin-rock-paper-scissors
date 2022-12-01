const buttons = document.querySelectorAll('button');
const resultsDiv = document.querySelector('#results');

const MAX_ROUNDS = 5;

let roundsPlayed = 0;
let roundsWon = 0;

function playRound(e)
{
    if (roundsPlayed >= MAX_ROUNDS)
        return;
        
    const userChoice = e.target.getAttribute('data-choice');
    const round = getRoundResult(userChoice, getComputerChoice());

    if (round.hasWon)
        roundsWon++;

    resultsDiv.innerHTML = round.message +
    `<br>Round number: ${roundsPlayed + 1}<br>Total wins: ${roundsWon}`;

    // If this is the last round
    if (roundsPlayed === MAX_ROUNDS - 1)
    {
        let resultMessage;

        if (roundsWon > 2)
        {
            resultMessage = 'You won'
        }
        else
        {
            resultMessage = 'You lost';
        }

        resultsDiv.innerHTML += `<br><br>Game finished. ${resultMessage} overall, with ${roundsWon} total wins!`;
    }

    roundsPlayed++;
}


buttons.forEach(button => button.addEventListener('click', (e) =>
{
    playRound(e);
}));

// Return random string containing 'Rock', 'Paper', or 'Scissors'
function getComputerChoice()
{
    let outcomes = ['Rock', 'Paper', 'Scissors'];
    let outcomeIndex = Math.floor(Math.random() * 3);
    return outcomes[outcomeIndex];
}

function getRoundResult(userChoice, computerChoice)
{
    userChoice = userChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (userChoice === 'rock')
    {
        if (computerChoice === 'scissors')
        {
            message = 'You win! Rock crushes scissors.';
            hasWon = true;
        }
        else
        {
            message = 'You lose! Paper covers rock.'
            hasWon = false;
        }
    }
    else if (userChoice === 'paper')
    {
        if (computerChoice === 'rock')
        {
            message = 'You win! Paper covers rock.';
            hasWon = true;
        }
        else
        {
            message = 'You lose! Scissors cut paper.';
            hasWon = false;
        }
    }
    else
    {
        if (computerChoice === 'paper')
        {
            message = 'You win!. Scissors cut paper.';
            hasWon = true;
        }
        else
        {
            message = 'You lose!. Rock crushes scissors.';
            hasWon = false;
        }
    }
    return {hasWon, message};
}