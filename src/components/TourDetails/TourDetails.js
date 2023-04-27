import { useParams } from "react-router-dom"
import DataJson from "../../data/db.json"
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import "./TourDetails.css";
import NavBar from "../Navbar/NavBar";
import Footer from "../footer/Footer";

function TourDetailes() {
    const { id } = useParams();
    let city = DataJson.filter(tour => tour.id === id)[0];


    const [total, setTotal] = useState(" ");
    const [show, setShow] = useState("Show More");
    const [condition, setCondition] = useState(true);
    let fullText = () => {
        if (condition) {
            setTotal(city.info.slice(Math.floor(city.info.length / 2)));
            setShow("show less");
            setCondition(false);
        }
        else {
            setTotal("");
            setShow("Show More");
            setCondition(true);
        }

    }

    return (
        < >
            <NavBar/>
            <Card style={{ width: '80%'}} className="card">
                <Card.Body>
                    <Card.Title className="title">{city.name}</Card.Title>
                    <Card.Img src={city.image} alt={city.name} className="img" />
                    <Card.Text className="text">
                        {city.info.slice(0, Math.floor(city.info.length / 2))}{total}<button onClick={fullText}>{show} </button>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Footer />
        </>
    )
}

export default TourDetailes;
