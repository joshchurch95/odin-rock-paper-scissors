// Return random string containing 'Rock', 'Paper', or 'Scissors'
function getComputerChoice()
{
    let outcomes = ['Rock', 'Paper', 'Scissors'];
    let outcomeIndex = Math.floor(Math.random() * 3);
    return outcomes[outcomeIndex];
}

function playRound(userChoice, computerChoice)
{
    userChoice = userChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (userChoice === 'rock')
    {
        if (computerChoice === 'scissors')
            return 'You win! Rock crushes scissors.';
        else
            return 'You lose! Paper covers rock.'
    }
    else if (userChoice === 'paper')
    {
        if (computerChoice === 'rock')
            return 'You win! Paper covers rock.';
        else
            return 'You lose! Scissors cut paper.';
    }
    else
    {
        if (computerChoice === 'paper')
            return 'You win!. Scissors cut paper.';
        else
            return 'You lose!. Rock crushes scissors.';
    }
}