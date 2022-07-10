import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function StoreCard(props){
    return(
        <div style={{margin: "10px 1px",}}>
            <Card>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Image src={props.img} roundedCircle width={20}/>
                            </Col>
                            <Col xs={10}>
                                <Card.Title>{props.name}</Card.Title>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}