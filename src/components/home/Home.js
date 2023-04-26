
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";
// import { Routes, Route } from "react-router-dom";
function Home(props) {
    return (
        <>

            <Header />
            <Tours data={props.data} />
            <Footer />
        </>
    )
}
export default Home;