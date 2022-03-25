import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout";
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
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/history">
            <Route index element={<History />} />
            <Route path=":id" element={<HistoryDetail />} />
          </Route>
          <Route path="/statistic" element={<Statistic />} />
        </Route>
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
