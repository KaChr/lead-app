import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="jumbotron">

          <h1 className="jumbo-tron-title">LIA-portalen</h1>
          <p className="jumbo-tron-description">Hitta din praktikplats lika lätt som ett, två, tre.</p>
          <button type="button" className="btn btn-success btn-lg">Börja nu!</button>
        </div>
        <div className="row landing-page-easy-info">
          <div className="col-sm landing-page-easy-info_card">
            <h2>1</h2>
            <p className="page-text">Registrera</p>
            <p className="page-text">Börja med att registrera ett konto hos oss, fyll sedan i din profil.</p>
          </div>
          <div className="col-sm landing-page-easy-info_card">
            <h2>2</h2>
            <p className="page-text">Börja leta</p>
            <p className="page-text">Kolla igenom våran lista på tillgängliga LIA-platser</p>
          </div>
          <div className="col-sm landing-page-easy-info_card">
            <h2>3</h2>
            <p className="page-text">Ansök!</p>
            <p className="page-text">Skicka in din ansökan till företagen!</p>
          </div>
        </div>
        <div className="row landing-page-easy-info-premium">
          <div className="col-sm landing-page-easy-info_card">
            <h3>Varför gå med i Premium som företag?</h3>
            <p className="page-text">Som premiumanvändare har du möjlighet att:</p>
            <ul className="page-list">
              <li>Söka på skolor</li>
              <li>Söka på elever</li>
              <li>Filtrera på studenters egenskaper</li>
            </ul>
          </div>
          <div className="col-sm landing-page-easy-info_card">
            <h3>Premium</h3>
            <button type="button" className="btn btn-success">Gå med!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
