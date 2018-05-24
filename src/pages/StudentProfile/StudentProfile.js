import React from 'react';
import StudentExampleBanner from "../images/headerimage.jpg";
import StudentExampleLogo from '../images/avatar-placeholder.png';
import './StudentProfile.css';
import StudentProfileDescription from './StudentProfileDescription';
import Button_Function from '..//..//Components/Button/Button_Function/Button_Function';

 
class StudentProfile extends React.Component {
    render() {
        return(
            <div className="studentProfile__container--height">
                <div className="studentProfile__banner"></div>
                <div className="container shadow student-profile__container ">
                    <div className="row border-bottom">
                        <div className="container" >
                            <div className="row">
                                <div className="studentProfile__logo--2 col-5"></div>
                                    <div className="d-flex align-items-center">
                                        <ul className="col list-unstyled mr-8">
                                            <li className="font-weight-bold">My Company</li>
                                            <li>Stad: </li>
                                            <li>Adress: </li>
                                            <li>E-mail: </li>
                                            <li>Hemsida: </li>
                                        </ul>
                                    </div>  
                            </div>
                        </div>                
                    </div>
                    <StudentProfileDescription />
                </div>
                <Button_Function button_content="Redigera Profil" />
            </div>
        );
    }
}

export default StudentProfile;