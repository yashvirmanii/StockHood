import HeaderBar from "../Component/HeaderBar/HeaderBar";
import DashBoard from "./DashBoard/DashBoard";
import "rsuite/dist/rsuite.min.css";
import { useState } from "react";

function App() {
  const [selectedStock, setSelectedStock] = useState("")
  return (
    <div className="App">
      <HeaderBar setSelectedStock={setSelectedStock} selectedStock={selectedStock} />
      <DashBoard selectedStock={selectedStock} />
    </div>
  );
}

export default App;