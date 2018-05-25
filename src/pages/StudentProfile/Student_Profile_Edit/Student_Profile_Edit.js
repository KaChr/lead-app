import React from 'react';
import Button_Function from '../../../Components/Button/Button_Function/Button_Function';
import Button from '../../../Components/Button/Button';
import { Authorization } from '../../../Components/Helper/Authorization';

class Student_Profile_Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'student'
        };
    }

    componentDidMount() {
        Authorization(this);
    }


    render() {
        return (
            <form className="row">
                <div className="col-8 mb-4 mt-5">
                    <div className="form-group">
                        <label>Namn:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Skola:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Utbildning:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>LIA period:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Kunskaper:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Skolperiod:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Om mig:</label>
                        <textarea className="form-control" rows="5" ></textarea>
                    </div>

                    <div className="form-group">
                        <label className="btn btn-default">
                            Profilbild <input type="file" hidden />
                        </label>
                    </div>

                    <Button_Function button_content="Spara" />
                    <Button url="../Student_Profile" name="Avbryt" />
                </div>
            </form>
        );
    }
}


export default Student_Profile_Edit;