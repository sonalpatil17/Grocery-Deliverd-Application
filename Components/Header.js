import React from "react";
import {Card, CardBody} from "reactstrap";

function Header({name,title})
{
    return (
        <div>
            <Card className="my-2 bg-info">
                <CardBody>
                    <h1 className="text-center my-5">Welcome To BigBasket</h1>
                </CardBody>
            </Card>
        </div>
    );
}
export default Header;