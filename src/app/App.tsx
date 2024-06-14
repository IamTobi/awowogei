import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerLookupPage from "../features/player-lookup/components/player-lookup-page";
import LandingPage from "./pages/landing-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayerLookupPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
