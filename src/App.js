import Home from "./components/home/Home";
import DataJson from "./data/db.json";
function App(){
  return(
    <>
    <Home data={DataJson}/>
    </>
  )
}
export default App; 
