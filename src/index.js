import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import LoggedInStudent from './users/loggedInStudent/LoggedInStudent';
import CompanyAdvertisement from './companies/CompanyAdvertisement';
import store from './store/store';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './pages/login/Login';
import ProfileCompanyEditPage from './pages/profileCompanyEditPage/ProfileCompanyEditPage';
import CompanyProfile from './pages/companyProfile/CompanyProfile';
import LoggedSchoolProfile from './pages/schools/LoggedSchoolProfile';
import StudentProfile from './pages/StudentProfile/StudentProfile'

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div className="container-fluid">
                <Header />
                <Route exact path="/" component={App} />
                <Route path="/logged-in-student" component={LoggedInStudent} />
                <Route path="/company_advertisement" component={CompanyAdvertisement} />
                <Route path="/login" component={Login} />
                <Route path="/profile_company_edit" component={ProfileCompanyEditPage} />
                <Route path="/company_profile" component={CompanyProfile} />
                <Route path="/logged-in-school-profile" component={LoggedSchoolProfile} />
                <Route path="/studentProfile" component={StudentProfile} />
                <Footer />
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
