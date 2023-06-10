import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <Container>
            <Row xs={1} md={4}>
           
                {products.map(product => 
                    <Item key={product.id} {...product} />

                )}           
            
            </Row>
      </Container> 

        
        
    )
}

export default ItemList