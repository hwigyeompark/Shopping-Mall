import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
import '../../css/Pants.css';
import SubNav from "../SubNav";
import p1 from '../../img/pants1.gif';
import p2 from '../../img/pants2.gif';
import p3 from '../../img/pants3.gif';


class Pants extends Component{
    detailView = (e) => {
        return '<a href="/category/pants/detailPants"></a>';
    };

    render(){
        return(
            <div>
                <SubNav/>
                <div id="pants">
                    <CardDeck>
                        <Card onClick={this.detailView}>
                            <CardImg src={p1}/>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg src={p2}/>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg src={p3}/>
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        );
    }
}
export default Pants;