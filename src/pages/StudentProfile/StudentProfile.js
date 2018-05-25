import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StudentProfile.css';
import Button from '..//..//Components/Button/Button';
import { Authorization } from '../../Components/Helper/Authorization'; 

 
class Student_Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            studentProfileName: {},
            studentProfileInfo: {},
            role: 'student'
        };
    }

    componentDidMount() {
        Authorization(this);

        const token = localStorage.getItem('token');
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/verify-token`, null, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then((res2) => {
            console.log('Hej 1');
            console.log(res2);
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/user-type/${res2.data.userId}`)
            .then((res3) => {
                console.log('Hej 2');
                console.log(res3);
                axios.get(`${process.env.REACT_APP_API_BASE_URL}/profile-students/${res3.data.id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
                .then((res) => {
                    console.log(res.data);
                    
                    let dateObj = new Date(res.data.Profile_student.intern_period_start);
                    let month = (dateObj.getUTCMonth() + 1) < 10 ? '0' + (dateObj.getUTCMonth() + 1) : dateObj.getUTCMonth() + 1; //months from 1-12
                    let day = dateObj.getUTCDate() < 10 ? '0' + dateObj.getUTCDate() : dateObj.getUTCDate();
                    let year = dateObj.getUTCFullYear();

                    console.log(year + '-' + month + '-' + day);
                    res.data.Profile_student.intern_period_start = year + '-' + month + '-' + day;

                    dateObj = new Date(res.data.Profile_student.intern_period_end);
                    month = (dateObj.getUTCMonth() + 1) < 10 ? '0' + (dateObj.getUTCMonth() + 1) : dateObj.getUTCMonth() + 1; //months from 1-12
                    day = dateObj.getUTCDate() < 10 ? '0' + dateObj.getUTCDate() : dateObj.getUTCDate();
                    year = dateObj.getUTCFullYear();

                    console.log(year + '-' + month + '-' + day);
                    res.data.Profile_student.intern_period_end = year + '-' + month + '-' + day;
                    
                    this.setState({
                        studentProfileName: res.data,
                        studentProfileInfo: res.data.Profile_student
                    })
                })
                .catch((err) => {
                    console.log(err);
                })
            })
            .catch((error3) => {
                console.log(error3);
            });
        })
        .catch((error2) => {
            console.log(error2);
        });
    }



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
                                            <li className="font-weight-bold">{this.state.studentProfileName.first_name + ' ' + this.state.studentProfileName.last_name}</li>
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
                        <Link className="btn btn-danger btn-sm" to={'/logged_in_student'}>Tillbaka</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Student_Profile;