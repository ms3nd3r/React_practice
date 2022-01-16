import React from 'react'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  render(){
    return(
        <ul className="menu">
          <li><Link to="profile">プロフィール</Link></li>
          <li><Link to="charm">魅力</Link></li>
          <li><Link to="Appearance">登場楽曲</Link></li>
          <li><Link to="Relationships">他アイドルとの関係</Link></li>
        </ul>
    )
  }
}

export default Menu;