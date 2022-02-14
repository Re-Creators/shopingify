import { Route, Routes } from "react-router-dom";
import ActionBar from "./components/ActionBar";
import MenuBar from "./components/MenuBar";
import History from "./pages/History";
import Items from "./pages/Items";
import Statistic from "./pages/Statistic";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/history" element={<History />} />
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
      <ActionBar />
    </div>
  );
}

export default App;
