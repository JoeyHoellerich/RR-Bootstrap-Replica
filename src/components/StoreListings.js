import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StoreCard from './StoreCard'
import pearLogo from "../img/pear_logo.png"


export default function StoreListings() {
    return(
        <div>
            <h2 style={{textAlign: "center"}}>Browse Stores in *City*</h2>
            <Container>
                <Row>
                    <Col>
                        <StoreCard img={pearLogo} name={"Store 1"}/>
                    </Col>
                    <Col>
                        <StoreCard img={pearLogo} name={"Store 2"}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <StoreCard img={pearLogo} name={"Store 3"}/>
                    </Col>
                    <Col>
                        <StoreCard img={pearLogo} name={"Store 4"}/>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}