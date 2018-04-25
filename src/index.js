import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import LoggedInUser from './users/LoggedInUser';
import CompanyAdvertisement from './companies/Company_advertisement';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/logged-in-user" component={LoggedInUser} />
            <Route path="/company_advertisement" component={CompanyAdvertisement} />
        </div>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
