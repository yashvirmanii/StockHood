import HeaderBar from "../Component/HeaderBar/HeaderBar";
import DashBoard from "./DashBoard/DashBoard";
import "rsuite/dist/rsuite.min.css";


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <DashBoard />
    </div>
  );
}

export default App;