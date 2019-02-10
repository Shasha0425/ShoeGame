import React from "react";
import { Jumbotron } from 'reactstrap';
import "./Header2.css";

const Header2 = (props) => (
    <div className="jumbo">
        <Jumbotron style={{'background-image': `url("assets/images/mario-background.gif")`}} >
            <h3 className="header2">{props.message}</h3>
        </Jumbotron>
    </div>
);

export default Header2;