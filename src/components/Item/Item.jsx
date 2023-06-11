import 'bootstrap/dist/css/bootstrap.css';
import {Card, Col} from 'react-bootstrap'
import './Item.css'
import { Link } from "react-router-dom";
const Item = ({id, saldo, precio, color, title, imagen}) => {
    
    return (            
        <Col className ="p-2">
            <Card className="card-body">
                <Card.Img variant="top" src={imagen} alt={title}/>
                <Card.Body>
                    <Card.Title className="titulo">{title}</Card.Title>
                    <Card.Text>
                        Cod. Artículo: {id}
                    </Card.Text>
                    <Card.Text>
                        Precio: ${precio}
                    </Card.Text>
                    <Card.Text>
                        Stock: {saldo} un.
                    </Card.Text>                    
                    <Link to={`/item/${id}`} className="btn btn-primary">Ver Detalle</Link>                    
                </Card.Body>
            </Card>
        </Col>       
)}

export default Item