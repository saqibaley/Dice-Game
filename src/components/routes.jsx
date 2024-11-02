import GamePage from "./gamePage";
import DiceGame from "./diceGame";

const routes = [
  { path: "/", element: <GamePage /> },
  { path: "/dice-game", element: <DiceGame /> },
];

export default routes;
