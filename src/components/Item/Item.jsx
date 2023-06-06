import 'bootstrap/dist/css/bootstrap.css';
import {Card, Col, Button} from 'react-bootstrap'
import './Item.css'

const Item = ({id, saldo, precio, color, title, imagen}) => {
    return (

            
                <Col className ="p-2">
                    <Card className="card-body">
                        <Card.Img variant="top" src={imagen} alt={title}/>
                        <Card.Body>
                            <Card.Title className="titulo">{title}</Card.Title>
                            <Card.Text>
                                Precio: ${precio}
                            </Card.Text>
                            <Card.Text>
                                Stock: {saldo} 356un.
                            </Card.Text>
                            <Button variant="primary">Ver Detalle</Button>
                        </Card.Body>
                    </Card>
                </Col>            
            
        
)}


export default Item