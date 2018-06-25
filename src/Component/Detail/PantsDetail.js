import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import pants1 from '../../img/pants1.gif';
import '../../css/PantsDetail.css';
import SubNav from "../SubNav";

class PantsDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
    };

    amountChange = (event) => {
        if (event.target.name === "btnUp"){
            alert(this.state.count);
        }
    };

    handleChangeCount = event => {
        this.setState({
            count: event.target.value
        })
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
                                <tbody>
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
                                    <td><input type="text" name="count" value={this.state.count} onChange={this.handleChangeCount}/></td>
                                    <td><button onClick={this.amountChange} name="btnUp">▲</button></td>
                                    <td><button>▼</button></td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default PantsDetail;