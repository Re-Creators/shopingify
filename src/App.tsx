import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import History from "./pages/History";
import HistoryDetail from "./pages/HistoryDetail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Statistic from "./pages/Statistic";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/history">
            <Route index element={<History />} />
            <Route path=":id" element={<HistoryDetail />} />
          </Route>
          <Route path="/statistic" element={<Statistic />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
