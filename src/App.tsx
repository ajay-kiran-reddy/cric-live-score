import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cricket from "./components/Cricket";
import MatchDetailsTabs from "./components/MatchDetails/MatchDetailsTabs";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cricket />,
  },
  {
    path: "/cricket",
    element: <Cricket />,
  },
  {
    path: "/cricket/scorecard/:id/:team1Name/:team1Id/:team2Name/:team2Id/:seriesId",
    element: <MatchDetailsTabs />,
  },
  {
    path: "/cricket/player/:id",
    element: <PlayerInfo />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
