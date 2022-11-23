// Return random string containing 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let outcomes = ['Rock', 'Paper', 'Scissors'];
    let outcomeIndex = Math.floor(Math.random() * 3);
    return outcomes[outcomeIndex];
}