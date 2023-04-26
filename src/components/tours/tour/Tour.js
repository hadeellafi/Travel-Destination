import TourDetailes from "../../TourDetails/TourDetails";
import "./Tour.css"
import { Link } from "react-router-dom";
function Tour(props) {
  const { name, image,id} = props.tour;
  return (
    <div className="tourDiv">
      <Link to={`/city/${id}`}>
      <h3 className="title" >{name}</h3>
      <img src={image} alt={name} />
      </Link>
    </div>
  );
}

export default Tour;
