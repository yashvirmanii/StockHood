import HeaderBar from "../Component/HeaderBar/HeaderBar";
import DashBoard from "./DashBoard/DashBoard";
import "rsuite/dist/rsuite.min.css";
import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [selectedStock, setSelectedStock] = useState("")
  const [allNews, setAllNews] = useState([])
  const [predictions, setPredictions] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    if (selectedStock === "") {
      axios.get("http://localhost:5000/api/newUpdates")
        .then(res => {
          const response = res.data;
          setAllNews(response)
        })
    } else {
      const stock = selectedStock.replaceAll(" ", "-")
      axios.get(`http://localhost:5000/api/news/${stock}`)
        .then(res => {
          const response = res.data;
          setAllNews(response)
        })
    }
  }, [selectedStock])

  useEffect(() => {
    axios.get("http://localhost:5000/api/predictions/")
      .then(res => {
        const response = res.data;
        setPredictions(response)
      })
  }, [])

  useEffect(() => {
    axios.get("http://localhost:5000/api/stock/portfolio/")
      .then(res => {
        const response = res.data;
        setPortfolio(response)
      })
  }, [])

  return (
    <div className="App">
      <HeaderBar setSelectedStock={setSelectedStock} selectedStock={selectedStock} />
      <DashBoard selectedStock={selectedStock} allNews={allNews} predictions={predictions} portfolio={portfolio} />
    </div>
  );
}

export default App;