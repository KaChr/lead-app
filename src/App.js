import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <button type="button" className="btn btn-primary">Primary</button>
      // </div>

      <div className="landing-page">
        <p>Place header here</p>
        <div className="jumbo-tron">
          <h1 className="jumbo-tron-title">LIA-portalen</h1>
          <p className="jumbo-tron-description">Hitta din praktikplats lika lätt som ett, två, tre.</p>
          <button type="button" class="btn btn-success btn-lg btn-block">Börja nu!</button>
        </div>
        <div className="row landing-page-easy-info">
          <div className="col-sm landing-page-easy-info_card">
            <h2>1</h2>
            <p className="page-text">Börja med att registrera ett konto hos oss, fyll sedan i din profil.</p>
          </div>
          <div className="col-sm landing-page-easy-info_card">
            <h2>2</h2>
            <p className="page-text">Kolla igenom våran lista på tillgängliga LIA-platser</p>
          </div>
          <div className="col-sm landing-page-easy-info_card">
            <h2>3</h2>
            <p className="page-text">Skicka in din ansökan till företagen!</p>
          </div>
        </div>
        <div className="row landing-page-easy-info-premium">
          <div className="col-sm landing-page-easy-info_card">
            <h3>Varför gå med i Premium som företag?</h3>
            <p className="page-text">Börja med att registrera ett konto hos oss, fyll sedan i din profil.</p>
          </div>
          <div className="col-sm landing-page-easy-info_card">
            <h3>Premium</h3>
            <button type="button" class="btn btn-success">Gå med!</button>
          </div>
        </div>
        <p>Place footer here</p>
      </div>
    );
  }
}

export default App;
