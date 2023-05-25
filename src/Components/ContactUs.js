import { Link } from "react-router-dom";
import Hero4 from "./Hero4";
import { CardBody ,Card,CardTitle, Button, Container} from "reactstrap"

const Contactus=() => {

    return(
        <>
        <div>
            <Hero4 hero4="roomsHero4">
        <div className="contact">

           <h1><Card className="text-center" border="success" >
        <CardBody>
            <CardTitle>Office Address:Sec-D, Dadar , Mumbai</CardTitle>
            <CardTitle>Telephone :+22256736/+917943267902</CardTitle>
            <CardTitle>EmailId : bigbasket@gmail.com</CardTitle>
            <CardTitle>Fax : +91 123 456 7890</CardTitle>
            <Container className="text-center">
                <Link to="/" ><Button>HOME </Button> </Link>
            </Container>
            </CardBody>
            </Card>
            </h1>
        </div>
        </Hero4>
        </div>
        </>

    )

};
export default Contactus;