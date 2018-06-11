import React, {Component} from 'react';
import { Navbar } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainNav extends Component{
    render(){
        return(
          <Navbar className="nav navbar-default">
              <div className="container-fluid">
                  <a className="navbar-brand">ShoppingMall</a>
                  <div className="collapse navbar-collapse">
                      <ul className="nav navbar-nav">
                          <li className="active">메뉴1</li>
                          <li className="active">메뉴2</li>
                          <button type="button" className="btn btn-default navbar-btn">로그인</button>
                          <button type="button" className="btn btn-default navbar-btn">회원가입</button>
                      </ul>
                  </div>
              </div>
          </Navbar>
        );
    }
}
export default MainNav;