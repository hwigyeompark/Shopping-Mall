import React, {Component} from 'react';
import { Card, CardImg } from 'reactstrap';
import '../../css/PantsDetail.css';
import SubNav from "../SubNav";
import p1 from '../../img/pants1.gif';
import p2 from '../../img/pants2.gif';
import p3 from '../../img/pants3.gif';

class PantsDetail extends Component{
    plist = [
        {
            img : p1,
            name : '유니크 일자 PT',
            company : '(주)바지청년들',
            point : '180점',
            price : '18,000'
        },
        {
            img : p2,
            name : '심플 와이드 슬랙스',
            company : '(주)바지청년들',
            point : '180점',
            price : '18,000'
        },
        {
            img : p3,
            name : '크림치즈 일자 부즈컷',
            company : '(주)바지청년들',
            point : '180점',
            price : '18,000'
        }
    ];

    static defaultProps = {
        img : 'No Img',
        name : 'No Name',
        company : 'No Company',
        point : 'No Point',
        price : 'No Price'
    };

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
                        <CardImg src={this.plist.img}/>
                    </Card>

                    <div id="pantsMent">
                        <h5>{this.plist.name}</h5>
                        <hr/>
                        <form>
                            <table>
                                <tbody>
                                <tr>
                                    <td>제조사 :</td>
                                    <td>{this.plist.company}</td>
                                </tr>
                                <tr>
                                    <td>마일리지 :</td>
                                    <td>{this.plist.point}</td>
                                </tr>
                                <tr>
                                    <td>가격 :</td>
                                    <td>{this.plist.price}</td>
                                </tr>
                                <tr>
                                    <td>수량 :</td>
                                    <td><input type="text" name="count" value={this.plist.count} onChange={this.handleChangeCount}/></td>
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