import React from 'react';
import { connect } from 'react-redux';
import './CompanyAdvertisement.css';

class CompanyAdvertisement extends React.Component {
    render() {
        // console.log(this.props.getCompanyAdvertisement.val1);
        // console.log(this.props.getCompanyAdvertisement.val2);
        return (
            <div className="row">
                <div className="col-12 mb-5 company-advertisement-main company-advertisement-background-3B3C47">Företags Logo</div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-12 mb-5 company-advertisement-name">Company</div>
                        <div className="col-12 mb-3 company-advertisement-headline">Title</div>
                        <div className="col-12 mb-3 company-advertisement-headline">Datum (publicerad)</div>
                        <div className="col-12 company-advertisement-headline">Info</div>
                        <div className="col-12 company-advertisement-info">Lorem ipsum dolor sit amet, arcu ac non, enim vestibulum dictumst tellus quis platea. Donec velit neque, accumsan tellus lorem nunc nulla aliquid ac, mi dui pharetra, justo lacinia. Eget purus sem lacus egestas wisi justo, gravida donec odio et malesuada elit eget, etiam maecenas posuere nec nunc sed, felis fermentum euismod sem. Quis pretium vestibulum sit diam nunc tristique, at nam tempor mi dolor montes, ac metus tortor odio cras vivamus lorem. Eleifend proin donec sit, donec placerat, ut convallis vehicula. Ut egestas id libero massa in turpis, pharetra mauris in orci. Neque libero diam pede magnis neque nunc, iaculis suspendisse nullam adipiscing, turpis vestibulum aliquam ac sed, mauris ut ullamcorper cursus. Blandit consectetuer a consequat egestas id. Maecenas torquent fringilla laoreet in pellentesque. Eu ac at felis ultricies, vel non wisi sed, faucibus augue. Id eu posuere quam eu viverra.</div>
                    </div>
                </div>
                <div className="col-3 mb-5">
                    <div className="row pt-5 pl-5 pb-5 mb-5 company-advertisement-sidemenu-background-3B3C47">
                        <div className="col-12 mb-3">Antal platser</div>
                        <div className="col-12 mb-3">Ort</div>
                        <div className="col-12 mb-3">Adress</div>
                        <div className="col-12 mb-3">Postkod</div>
                        <div className="col-12">Mail</div>
                    </div>
                    <div className="col-12 pl-5"><button type="button" className="btn btn-danger btn-block mb-2">Alla bolag</button></div>
                    <div className="col-12 pl-5"><button type="button" className="btn btn-danger btn-block mb-2">Favorit</button></div>
                    <div className="col-12 pl-5 mb-5"><button type="button" className="btn btn-danger btn-block">Ansök</button></div>
                </div>
                <div className="col-9">Antal visningar:</div>
                <div className="col-3 pl-5 pr-4"><button type="button" className="btn btn-danger btn-block">Dela</button></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(CompanyAdvertisement);