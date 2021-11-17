import { Card } from "react-bootstrap";
import "./SidebarCard.css";


const SidebarCard = (props ) => {
  return (
    <>
 
      <div className="card-wrapper" style={{ width: "18rem"  ,backgroundColor: props.Cardcolor}}>
        <Card.Body>
          <h1 className="card-number">{props.cardCount}</h1>
          <h5 className="card-title">{props.name}</h5>
          <ul>
            <li>Active Users : 8454</li>
            <li>Online Users : 315</li>
          </ul>
          <Card.Link href="#">{props.link}details</Card.Link>
        </Card.Body>
      </div>
    </>
  );
};

export default SidebarCard;
