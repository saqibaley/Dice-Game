import React from "react";
import { useNavigate } from "react-router-dom";
import Dice from "../assets/diceMain.png";

const GamePage = () => {
  // Function to handle navigation to the play page
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle navigation to the Dice Game page
  const handlePlayNow = () => {
    navigate("/dice-game"); // Navigate to the Dice Game route
  };
  return (
    <div className="sectionContainer flex flex-col md:flex-row justify-center items-center w-full min-h-screen p-4 space-y-8 md:space-y-0 md:space-x-8">
      <div className="diceImg">
        <img
          src={Dice}
          alt="diceImage"
          className="max-w-full h-auto xs:max-w-1/4 sm:max-w-1/2 md:max-w-md lg:max-w-lg"
        />
      </div>
      <div className="gameText text-center flex flex-col items-center md:items-end">
        <h1 className="text-[40px] md:text-[60px] font-bold uppercase whitespace-nowrap mb-1">
          Dice Game
        </h1>
        <button
          onClick={handlePlayNow} // Link to play page
          className="px-6 py-1 w-36 text-[16px] bg-black text-white font-semibold rounded border-1 transition-colors duration-300 hover:bg-white hover:text-black mt-1 cursor-pointer"
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default GamePage;
