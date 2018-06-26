import React, {Component} from 'react';
import '../css/MainNav.css';

class MainNav extends Component{
    render(){
        return(
          <div id="navbar">
              <ul>
                  <li><a href="/category/outer">아우터</a></li>
                  <li><a href="/category/top">셔츠/블라우스</a></li>
                  <li><a href="/category/pants">팬츠</a></li>
                  <li><a href="/category/skirt">스커트</a></li>
                  <li><a href="/category/acc">악세사리</a></li>
                  <li><a href="/category/shoes">신발</a></li>
              </ul>
              <button>장바구니</button>
          </div>
        );
    }
}
export default MainNav;