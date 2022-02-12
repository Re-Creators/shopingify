import { Route, Routes } from "react-router-dom";
import ActionBar from "./components/ActionBar";
import MenuBar from "./components/MenuBar";
import Items from "./pages/Items";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route path="/" element={<Items />} />
      </Routes>
      <ActionBar />
    </div>
  );
}

export default App;
