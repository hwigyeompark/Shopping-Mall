import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import pants1 from '../../img/pants1.gif';
import '../../css/PantsDetail.css';

class PantsDetail extends Component{
    render(){
        return(
            <div id="detailPants">
                <Card>
                    <CardImg src={pants1}/>
                </Card>
            </div>
        );
    }
}
export default PantsDetail;