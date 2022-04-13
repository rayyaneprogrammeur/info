import { useParams } from "react-router-dom";
import data from "./data";

function Representation() {
  const { id } = useParams();
  const { image, name, title, definition, features } = data[id - 1];
  return (
    <div className="repre-container">
      <div className="repre-title-container">
        <img src={image} alt={name} className="repre-subject-image"/>
        <h2 className="repre-subject">{name}</h2>
        <h3 className="repre-sub-subject">{title}</h3>
      </div>
      <div className="repre-info-container">
        <h1 className="repre-definition-title">Definition</h1>
        <p className="repre-definition">{definition}</p>
        <h1 className="repre-features-title">Features</h1>
        <p className="repre-features">{features}</p>
      </div>
    </div>
  );
}

export default Representation;
