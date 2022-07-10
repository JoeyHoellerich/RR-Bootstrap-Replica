import Card from "react-bootstrap/Card"
import lightGreen from "../img/lightgreen.png"

export default function Header() {
    return(
        <Card className="text-dark">
            <Card.Img src={lightGreen} alt="lightgreen" height="300"/>
            <Card.ImgOverlay>
                <Card.Title>Swing by and steal from food for your family!</Card.Title>
                <Card.Text>Or pay for it, we're good with either.</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}