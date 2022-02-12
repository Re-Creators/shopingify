import { Route, Routes } from "react-router-dom";
import ActionBar from "./components/ActionBar";
import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ActionBar />
    </div>
  );
}

export default App;
