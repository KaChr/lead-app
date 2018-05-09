import React from 'react';
import companyExampleBanner from "../images/companyExampleBanner.jpg";
import companyExampleLogo from '../images/companyExampleLogo.png';
import './CompanyProfile.css';


class CompanyProfile extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <img src={companyExampleBanner} width="100%"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={companyExampleLogo} width="300"/>
                        </div>
                        
                        <div className="col">
                            <h2>My Company</h2>
                            <p>Stad: </p>
                            <p>Adress: </p>
                            <p>E-mail: </p>
                            <p>Hemsida: </p>
                        </div>
                    </div>
                    <div>
                        <h2>Om oss</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies, libero luctus consectetur egestas, nulla eros tempus odio, sed lacinia sapien dui nec diam. Integer ut nunc magna. In eu enim felis. Cras neque eros, varius consequat arcu at, facilisis venenatis purus. Quisque at venenatis augue. Proin interdum ultrices efficitur. Maecenas ut mauris at dolor mollis euismod. </p>
                        <p>Aenean risus massa, vulputate non fermentum id, venenatis nec tortor. Etiam dui turpis, consequat et dui dapibus, cursus iaculis erat. Mauris feugiat felis et nunc posuere elementum. Integer sapien justo, vulputate sit amet congue sed, pellentesque sit amet justo.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyProfile;