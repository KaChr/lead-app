import React from 'react';
import './LoggedSchoolProfile.css';
import { Authorization } from '../../Components/Helper/Authorization';

class LoggedSchoolProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'school'
        };
    }

    componentDidMount() {
        Authorization(this);
    }

    render() {
        return (
            <div className="row logged-school-profile">
                <div className="col-12 mb-4 mt-5">
                    <div className="row">
                        <div className="col-8 logged-school-profile-header logged-school-profile-center-text">Att verifiera:</div>
                        <div className="col-8 logged-school-profile-scroll logged-school-profile-verify-height logged-school-profile-background logged-school-profile-center-text">
                            <div className="row">
                                <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 pt-2 pb-2 logged-school-profile-darker-background">Sanna Karlsson, A academy, Frontend developer</div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 logged-school-profile-darker-background">
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="logged-school-profile-background-green btn btn-success btn-sm text-dark mt-1 mb-1 mr-1">Acceptera</button>
                                            <button className="logged-school-profile-background-red btn btn-danger btn-sm text-dark mt-1 mb-1">Avböj</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 pt-2 pb-2">Karl Nilsson, A academy, Frontend developer</div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="logged-school-profile-background-green btn btn-success btn-sm text-dark mt-1 mb-1 mr-1">Acceptera</button>
                                            <button className="logged-school-profile-background-red btn btn-danger btn-sm text-dark mt-1 mb-1">Avböj</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 pt-2 pb-2 logged-school-profile-darker-background">Sanna Karlsson, A academy, Frontend developer</div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 logged-school-profile-darker-background">
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="logged-school-profile-background-green btn btn-success btn-sm text-dark mt-1 mb-1 mr-1">Acceptera</button>
                                            <button className="logged-school-profile-background-red btn btn-danger btn-sm text-dark mt-1 mb-1">Avböj</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 pt-2 pb-2">Karl Nilsson, A academy, Frontend developer</div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="logged-school-profile-background-green btn btn-success btn-sm text-dark mt-1 mb-1 mr-1">Acceptera</button>
                                            <button className="logged-school-profile-background-red btn btn-danger btn-sm text-dark mt-1 mb-1">Avböj</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 pt-2 pb-2 logged-school-profile-darker-background">Sanna Karlsson, A academy, Frontend developer</div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 logged-school-profile-darker-background">
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="logged-school-profile-background-green btn btn-success btn-sm text-dark mt-1 mb-1 mr-1">Acceptera</button>
                                            <button className="logged-school-profile-background-red btn btn-danger btn-sm text-dark mt-1 mb-1">Avböj</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 pt-2 pb-2">Karl Nilsson, A academy, Frontend developer</div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="logged-school-profile-background-green btn btn-success btn-sm text-dark mt-1 mb-1 mr-1">Acceptera</button>
                                            <button className="logged-school-profile-background-red btn btn-danger btn-sm text-dark mt-1 mb-1">Avböj</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 pt-2 pb-2 logged-school-profile-darker-background">Sanna Karlsson, A academy, Frontend developer</div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6 logged-school-profile-darker-background">
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="logged-school-profile-background-green btn btn-success btn-sm text-dark mt-1 mb-1 mr-1">Acceptera</button>
                                            <button className="logged-school-profile-background-red btn btn-danger btn-sm text-dark mt-1 mb-1">Avböj</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 pt-2 pb-2">Karl Nilsson, A academy, Frontend developer</div>
                                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                    <div className="row">
                                        <div className="col-12">
                                            <button className="logged-school-profile-background-green btn btn-success btn-sm text-dark mt-1 mb-1 mr-1">Acceptera</button>
                                            <button className="logged-school-profile-background-red btn btn-danger btn-sm text-dark mt-1 mb-1">Avböj</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 mb-5">
                    <div className="row">
                        <div className="col-8 logged-school-profile-header logged-school-profile-center-text">Verifierade elever:</div>
                        <div className="col-8 logged-school-profile-scroll logged-school-profile-background logged-school-profile-center-text logged-school-profile-height">
                            <div className="row">
                                <div className="col-12">
                                    <div className="col-12"><b>Frontend developer, A academy</b></div>
                                    <div className="col-12">Sonja Kellman, A academy, Frontend developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="col-12"><b>Fullstack developer, A academy</b></div>
                                    <div className="col-12">Tommy Gustavson, A academy, Fullstack developer</div>
                                    <div className="col-12">Göran Andersson, A academy, Fullstack developer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoggedSchoolProfile;