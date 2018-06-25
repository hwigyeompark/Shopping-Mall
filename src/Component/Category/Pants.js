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
        return(
            <div id="pantsWrap">
                <SubNav/>
                <div id="pants">
                    <CardDeck>
                        <div className="pantsCard" onClick={this.detailView}>
                            <Card>
                                <CardImg src={p1}/>
                                <CardBody>
                                    <CardTitle>유니크 일자 PT</CardTitle>
                                    <CardSubtitle>18,000원</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="pantsCard" onClick={this.detailView}>
                            <Card>
                                <CardImg src={p2}/>
                                <CardBody>
                                    <CardTitle>심플 와이드 슬랙스</CardTitle>
                                    <CardSubtitle>11,900원</CardSubtitle>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="pantsCard" onClick={this.detailView}>
                            <Card>
                                <CardImg src={p3}/>
                                <CardBody>
                                    <CardTitle>크림치즈 일자 부츠컷</CardTitle>
                                    <CardSubtitle>23,900원</CardSubtitle>
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