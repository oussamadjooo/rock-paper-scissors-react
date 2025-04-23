import React, { useState } from 'react';
import './App.css';
function App() {
  const [user, setUser] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['rock', 'paper', 'scissors'];

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return "It's a tie!";
    if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    }
    return 'Computer wins!';
  };

  const handleUserChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUser(choice);
    setComputer(computerChoice);
    setResult(determineWinner(choice, computerChoice));
  };

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <h2>Choose your weapon:</h2>
      <button onClick={() => handleUserChoice('rock')}>Rock</button>
      <button onClick={() => handleUserChoice('paper')}>Paper</button>
      <button onClick={() => handleUserChoice('scissors')}>Scissors</button>

      {user && computer && (
        <div>
          <p>You chose: {user}</p>
          <p>Computer chose: {computer}</p>
          <h3>{result}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
