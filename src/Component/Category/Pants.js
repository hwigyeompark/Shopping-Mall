import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import '../../css/Pants.css';
import SubNav from "../SubNav";
import p1 from '../../img/pants1.gif';
import p2 from '../../img/pants2.gif';
import p3 from '../../img/pants3.gif';


class Pants extends Component{
    detailView = () => {
        this.props.history.push("/category/pants/detailPants");
    };

    render(){
        return(
            <div>
                <SubNav/>
                <div id="pants">
                    <CardDeck>
                        <div id="card1" onClick={this.detailView}>
                            <Card>
                                <CardImg src={p1}/>
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div id="card2">
                            <Card>
                                <CardImg src={p2}/>
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div id="card3">
                            <Card>
                                <CardImg src={p3}/>
                                <CardBody>
                                    <CardTitle>Card title</CardTitle>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                    </CardDeck>
                </div>
            </div>
        );
    }
}
export default withRouter(Pants);