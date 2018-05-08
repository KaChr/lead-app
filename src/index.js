import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import LoggedInUser from './users/loggedInUser/LoggedInUser';
import CompanyAdvertisement from './companies/CompanyAdvertisement';
import store from './store/store';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './pages/login/Login';
import CompanyProfile from './pages/companyProfile/CompanyProfile';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path="/" component={App} />
                <Route path="/logged-in-user" component={LoggedInUser} />
                <Route path="/company_advertisement" component={CompanyAdvertisement} />
                <Route path="/login" component={Login} />
                <Route path="/company_profile" component={CompanyProfile} />
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
