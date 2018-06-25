import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import pants1 from '../../img/pants1.gif';
import '../../css/PantsDetail.css';
import SubNav from "../SubNav";

class PantsDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1
        }
    };

    amountChange = (event) => {
        event.preventDefault();
        if (event.target.name === "btnUp"){
            this.setState({
                count: this.state.count + 1
            })
        }else {
            this.setState({
                count: this.state.count - 1
            });
            if (this.state.count === 1){
                alert("1미만의 수량은 될 수 없습니다.")
                this.setState({
                    count: 1
                })
            }
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
                                    <td><input type="number" name="count" value={this.state.count} onChange={this.handleChangeCount}/></td>
                                    <td><button onClick={this.amountChange} name="btnUp">▲</button></td>
                                    <td><button onClick={this.amountChange} name="btnDown">▼</button></td>
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