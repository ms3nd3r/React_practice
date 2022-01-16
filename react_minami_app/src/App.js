import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Menu from './Menu';
import home from './home';
import profile from './profile';
import charm from './charm';
import Appearance from './Appearance';
import Relationships from './Relationships';


class App extends Component {
  render(){
    return (
      <div className="App">
          <Router>
            <div>
            <header className="App-header">
              <h1>新田美波<span>応援サイト</span></h1>
              <Menu />

            </header>
              <h2>サイト概要</h2>
              <p>
                このサイトはマルチメディアコンテンツ"アイドルマスターシンデレラガールズ"に登場するアイドル、"新田美波"を紹介するサイトとなっています。<br />
                新田美波の良さを知っていただき、まだプレイされていない方への足がかりや<br />
                既に"アイドルマスターシンデレラガールズ"や"アイドルマスターシンデレラガールズ スターライトステージ"をプレイされている<br />
                プロデューサーさんに届くことがあればとても嬉しいです。
              </p>
              <Routes>
                <Route exact path='/' component={home}/>
                <Route exact path='/profile' component={profile}/>
                <Route exact path='/charm' component={charm}/>
                <Route exact path='/Appearance' component={Appearance}/>
                <Route exact path='/Relationships' component={Relationships}/>
              </Routes>
            </div>
            <footer>本サイトで利用している画像、楽曲、キャラクターの著作権は窪岡俊之氏及び株式会社バンダイナムコエンターテイメントに帰属します。</footer>
          </Router>
      </div>
    );
  }
}

export default App;
