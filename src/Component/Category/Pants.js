import React, {Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardDeck, CardSubtitle, CardBody } from 'reactstrap';
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
        const plist = {
            item1:
                {
                    name: '유니크 일자 PT',
                    price: '18,000원'
                },
            item2:
                {
                    name: '심플 와이드 슬랙스',
                    price: '11,900원'
                },
            item3:
                {
                    name: '크림치즈 일자 부즈컷',
                    price: '23,900원'
                }
        };
        return(
            <div id="pantsWrap">
                <SubNav/>
                <div id="pants">
                    <CardDeck>
                        <div className="pantsCard" onClick={this.detailView}>
                            <Card>
                                <CardImg src={p1}/>
                                <CardBody>
                                    <CardTitle>{plist.item1.name}</CardTitle>
                                    <CardSubtitle>{plist.item1.price}</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="pantsCard" onClick={this.detailView}>
                            <Card>
                                <CardImg src={p2}/>
                                <CardBody>
                                    <CardTitle>{plist.item2.name}</CardTitle>
                                    <CardSubtitle>{plist.item2.price}</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="pantsCard" onClick={this.detailView}>
                            <Card>
                                <CardImg src={p3}/>
                                <CardBody>
                                    <CardTitle>{plist.item3.name}</CardTitle>
                                    <CardSubtitle>{plist.item3.price}</CardSubtitle>
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