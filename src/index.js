import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import LoggedInUser from './users/loggedInUser/LoggedInUser';
import CompanyAdvertisement from './companies/Company_advertisement';
import store from './store/store';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/logged-in-user" component={LoggedInUser} />
                <Route path="/company_advertisement" component={CompanyAdvertisement} />
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
