import Home from "./components/home/Home";
import DataJson from "./data/db.json";
import { Routes, Route } from "react-router-dom";
import TourDetails from "./components/TourDetails/TourDetails";
function App() {
  return (
    <>
      {/* <Home data={DataJson} /> */}
      <Routes>
        <Route path="/" element={<Home data={DataJson}/>}></Route>
        <Route path="/city/:id" element={<TourDetails />}></Route>

      </Routes>
    </>
  )
}
export default App; 

