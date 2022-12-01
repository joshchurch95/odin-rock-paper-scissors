const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (e) => {
    const userChoice = e.target.getAttribute('data-choice');
    const round = playRound(userChoice, getComputerChoice());
    console.log(round.message);
}));

// Return random string containing 'Rock', 'Paper', or 'Scissors'
function getComputerChoice()
{
    let outcomes = ['Rock', 'Paper', 'Scissors'];
    let outcomeIndex = Math.floor(Math.random() * 3);
    return outcomes[outcomeIndex];
}

function getUserChoice() {
    let userChoice = prompt('Please enter a hand you would like to play ("rock", "paper", or "scissors"');

    while (!['rock', 'paper', 'scissors'].includes(userChoice.toLowerCase()))
    {
        alert("You input doesn't match one of the available options.")
        userChoice = prompt('Please enter a hand you would like to play ("rock", "paper", or "scissors"');
    }
    return userChoice;
}

function playRound(userChoice, computerChoice)
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

function game()
{
    let roundsWon = 0;
    let resultMessage;

    // Logic for playing five rounds temporarily disabled
    // for (let i = 0; i < 5; i++)
    // {
    // }
    // alert(round.message + `\nRound number: ${i + 1}\nTotal wins: ${roundsWon}`);

    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    
    while (userChoice.toLowerCase() === computerChoice.toLowerCase())
    {
        alert(`Draw! You both chose ${userChoice}.`);
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();
    }
    let round = playRound(userChoice, computerChoice);

    if (round.hasWon === true)
    {
        roundsWon++;
    }

    if (roundsWon > 2)
    {
        resultMessage = 'You won'
    }
    else
    {
        resultMessage = 'You lost';
    }

    alert(`Game finished. ${resultMessage} overall, with ${roundsWon} total wins!`);
}
