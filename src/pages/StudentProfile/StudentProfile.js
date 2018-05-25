import React from 'react';
import axios from 'axios';
import './StudentProfile.css';
import Button from '..//..//Components/Button/Button';
import { Authorization } from '../../Components/Helper/Authorization';


class Student_Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            studentProfileInfo: {},
            role: 'student'

        };
    }

    componentDidMount() {
        Authorization(this);
        axios.get('http://localhost:7770/profile-students/1')
            .then((ress) => {
                console.log(ress);
                this.setState({
                    studentProfileInfo: ress.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }



    render() {
        return (
            <div className="studentProfile__container--height">
                <div className="studentProfile__banner"></div>
                <div className="container shadow student-profile__container ">
                    <div className="row border-bottom">
                        <div className="container" >
                            <div className="row">
                                <div className="studentProfile__logo--2 col-5"></div>
                                <div className="d-flex align-items-center">
                                    <ul className="col list-unstyled mr-8">
                                        <li className="font-weight-bold">My Name</li>
                                        <li><b>Skola</b>: {this.state.studentProfileInfo.current_school}</li>
                                        <li><b>Utbildning</b>: {this.state.studentProfileInfo.education}</li>
                                        <li><b>LIA period</b>: {this.state.studentProfileInfo.intern_period_start} - {this.state.studentProfileInfo.intern_period_end}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-3 mr-3 pb-3">
                        <h2>Om oss</h2>
                        <div className="border container-medium mr-1 ">
                            <div className="col-8">
                                <p>{this.state.studentProfileInfo.description}</p>
                                <br />
                                <p><b>Kunskaper</b>: {this.state.studentProfileInfo.knowledge}</p>
                                <p><b>Skolperiod</b>: {this.state.studentProfileInfo.school_length}</p>
                            </div>
                        </div>
                        <Button url="/Student_Profile_Edit" name="Redigera Profil" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Student_Profile;