import { Route, Routes } from "react-router-dom";
import ActionBar from "./components/ActionBar";
import MenuBar from "./components/MenuBar";
import History from "./pages/History";
import HistoryDetail from "./pages/HistoryDetail";
import Home from "./pages/Home";
import Statistic from "./pages/Statistic";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history">
          <Route index element={<History />} />
          <Route path=":id" element={<HistoryDetail />} />
        </Route>
        <Route path="/statistic" element={<Statistic />} />
      </Routes>
      <ActionBar />
    </div>
  );
}

export default App;
