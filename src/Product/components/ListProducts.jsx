import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ListProducts = ({products, delProd}) => {


  return (
    <Container>
    <Row>
     
      {
        products.map(({name, priceUnitary, _id, size, imgUrl, description, category})=> (
              <Col xs={12} md={6} lg={4} key={_id}>
                  <Card style={{ width: '18rem', margin: '1rem' }}>
                      <Card.Img variant="top" src={imgUrl} />
                          <Card.Body>
                              <Card.Title>{name}-{category}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">Size: {size}</Card.Subtitle>
                                    <Card.Text>
                                    {description}
                                    </Card.Text>
                                    <Button variant="primary" disabled>${priceUnitary}</Button>
                                    <Button variant="danger" onClick={() => delProd(_id)}>DELETE</Button>
                          </Card.Body>
                  </Card>
            </Col>
        ))
      }     
    </Row>

  </Container>
  );
}

export default ListProducts;