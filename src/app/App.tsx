import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerLookupPage from "../features/player-lookup/components/player-lookup-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayerLookupPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
