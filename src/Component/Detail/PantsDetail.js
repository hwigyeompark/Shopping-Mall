import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import pants1 from '../../img/pants1.gif';
import '../../css/PantsDetail.css';
import SubNav from "../SubNav";

class PantsDetail extends Component{
    amountChange = () => {
        if (this.value === "▲"){
            alert("add");
        }
    };
    render(){
        return(
            <div id="wrap">
                <SubNav/>
                <div id="detailPants">
                    <Card id="pantsCard">
                        <CardImg src={pants1}/>
                    </Card>

                    <div id="pantsMent">
                        <h5>유니크 일자PT</h5>
                        <hr/>
                        <form>
                            <table>
                                <tr>
                                    <td>제조사 :</td>
                                    <td>(주)바지청년들</td>
                                </tr>
                                <tr>
                                    <td>마일리지 :</td>
                                    <td>180점 적립</td>
                                </tr>
                                <tr>
                                    <td>가격 :</td>
                                    <td>18,000</td>
                                </tr>
                                <tr>
                                    <td>수량 :</td>
                                    <td><input type="text" name="count" value="1"/></td>
                                    <td><button onClick={this.amountChange}>▲</button></td>
                                    <td><button>▼</button></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default PantsDetail;