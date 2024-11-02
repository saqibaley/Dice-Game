import React, { useState } from "react";
import Dice1 from "../assets/dice1.png";
import Dice2 from "../assets/dice2.png";
import Dice3 from "../assets/dice3.png";
import Dice4 from "../assets/dice4.png";
import Dice5 from "../assets/dice5.png";
import Dice6 from "../assets/dice6.png";

// Dice images array
const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

const DiceGame = () => {
  // State variables
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDiceIndex, setCurrentDiceIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [showWarning, setShowWarning] = useState(false);
  const [diceClickable, setDiceClickable] = useState(true);
  const [showRules, setShowRules] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("");

  // Function to roll the dice
  const rollDice = () => {
    if (selectedNumber === null) {
      setShowWarning(true);
      return;
    }

    if (!diceClickable) return;

    setDiceClickable(false); // Disable further clicks
    const randomIndex = Math.floor(Math.random() * 6);
    setCurrentDiceIndex(randomIndex);
    const rolledNumber = randomIndex + 1;

    // Update score based on the rolled number
    if (rolledNumber === selectedNumber) {
      setScore((prevScore) => prevScore + rolledNumber);
    } else {
      setScore((prevScore) => prevScore - 2);
    }
  };

  // Array of selectable numbers
  const numbers = [1, 2, 3, 4, 5, 6];

  // Function to select a number
  const selectNumber = (number) => {
    setSelectedNumber(number);
    setShowWarning(false);
    setDiceClickable(true); // Enable dice clicking
  };

  // Function to toggle rules visibility
  const toggleRules = () => {
    setShowRules((prev) => !prev);
    setAnimationDirection(showRules ? "slide-in-left" : "slide-in-right");
  };

  // Function to reset the game
  const resetGame = () => {
    setScore(0);
    setSelectedNumber(null);
    setShowWarning(false);
    setCurrentDiceIndex(null);
    setDiceClickable(true);
  };

  return (
    <div className="dice-game-container max-w-[90%] md:max-w-[80%] lg:max-w-[90%] mx-auto flex flex-col items-center p-4 space-y-8">
      {/* Score Section */}
      <div className="score-section flex flex-col md:flex-row justify-between items-center w-full space-y-8 md:space-y-0 md:space-x-8">
        <div className="score-display flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-semibold">{score}</h1>
          <p className="text-sm md:text-base font-medium">Total Score</p>
        </div>

        <div className="number-selection flex flex-col items-center">
          {showWarning && (
            <p className="warning-text text-orange-600 pb-2">
              You have not selected any number
            </p>
          )}
          <div className="number-boxes flex justify-center md:justify-start gap-2 md:gap-3">
            {numbers.map((number) => (
              <p
                key={number}
                onClick={() => selectNumber(number)}
                className={`number-box border border-black p-3 md:p-4 flex justify-center items-center w-[40px] h-[40px] md:w-[50px] md:h-[50px] cursor-pointer transition-colors duration-300 ${
                  selectedNumber === number ? "bg-black text-white" : ""
                }`}
              >
                {number}
              </p>
            ))}
          </div>
          <div className="selection-label text-center md:text-left mt-2 text-sm md:text-base font-medium">
            Select Number
          </div>
        </div>
      </div>

      {/* Game Section */}
      <div className="game-section flex flex-col items-center w-full min-h-screen mt-8">
        <div className="dice-container mb-2">
          <img
            src={
              currentDiceIndex !== null ? diceImages[currentDiceIndex] : Dice1
            }
            alt="Dice"
            className="w-[170px] h-[170px] cursor-pointer"
            onClick={rollDice} // Trigger dice roll
          />
        </div>
        <div className="dice-instruction text-[17px] font-semibold">
          <p>Click on the Dice to Roll</p>
        </div>
        <div className="button-container flex flex-col space-y-2 mt-2">
          <button
            onClick={resetGame}
            className="reset-button px-6 py-1 w-36 text-[16px] bg-white text-black font-semibold rounded border-1 border-slate-300 transition-colors duration-300 hover:bg-[#adadad] hover:text-white hover:border-slate-100 cursor-pointer"
          >
            Reset Score
          </button>
          <button
            onClick={toggleRules}
            className="rules-button px-6 py-1 w-36 text-[16px] bg-black text-white font-semibold rounded border-1 transition-colors duration-300 hover:bg-white hover:text-black hover:border-lime-400 cursor-pointer"
          >
            <span
              className={`animated-text transition-transform duration-500 ${animationDirection}`}
            >
              {showRules ? "Hide Rules" : "Show Rules"}
            </span>
          </button>
        </div>

        {/* Game Rules Section */}
        {showRules && (
          <div className="rules-section bg-[#FBF1F1] max-w-[50%] md:max-w-[55%] lg:max-w-[50%] rounded flex flex-col p-4 mt-9 fade-in">
            <h3 className="font-bold text-lg mb-4">
              How to Play the Dice Game
            </h3>
            <div className="rules-description text-xs font-medium">
              <p>Select any number.</p>
              <p>Click on the dice image.</p>
              <p>
                If the selected number matches the dice number, you gain points
                equal to the dice number. If incorrect, two points are deducted.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiceGame;
