import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
          <div class="container">
            <div class="row text-center text-xs-center text-sm-left text-md-left">
              <div class="col-xs-12 col-sm-4 col-md-4">
                <h5>Administration</h5>
                <ul class="list-unstyled quick-links">
                  <li><a href="#"><b>Team Lead AB</b></a></li>
                  <li><a href="#">Org. nr: 159754-4352</a></li>
                  <li><a href="#">Stubbsundsvägen 11</a></li>
                  <li><a href="#">131 41 Nacka</a></li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4">
                <h5>Kontaktinformation</h5>
                <ul class="list-unstyled quick-links">
                  <li><a href="#">info@teamlead.se</a></li>
                  <li><a href="#">0515-1002940</a></li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4">
                <h5>Besökadress</h5>
                <ul class="list-unstyled quick-links">
                  <li><a href="#">Team Lead</a></li>
                  <li><a href="#">Elektravägen 29</a></li>
                  <li><a href="#">126 30 Hägersten</a></li>
                  <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by">Imprint</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    )
};

export default Footer;