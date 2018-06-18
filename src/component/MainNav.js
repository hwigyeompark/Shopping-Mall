import React, {Component} from 'react';
import '../css/MainNav.css';


class MainNav extends Component{
    render(){
        return(
          <div id="navbar">
              <ul>
                  <li><a href="#">아우터</a></li>
                  <li><a href="#">셔츠/블라우스</a></li>
                  <li><a href="#">팬츠</a></li>
                  <li><a href="#">스커트</a></li>
                  <li><a href="#">악세사리</a></li>
                  <li><a href="#">신발</a></li>
              </ul>
          </div>
        );
    }
}
export default MainNav;