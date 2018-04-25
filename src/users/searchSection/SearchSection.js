import React from 'react';
import $ from 'jquery';
import './SearchSection.css';

class SearchSection extends React.Component {
    componentDidMount() {
        const angleUp = document.getElementById('angle-up');
        const angleDown = document.getElementById('angle-down');

        angleUp.style.display = "none";
        angleDown.style.display = "block";
    }

    onShowFilter() {
        const angleUp = document.getElementById('angle-up');
        const angleDown = document.getElementById('angle-down');

        $("#filter").slideToggle();

        if(angleDown.style.display === "block") {
            angleDown.style.display = "none";
            angleUp.style.display = "block";
        } else {
            angleDown.style.display = "block";
            angleUp.style.display = "none";
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-9">
                    <input type="text" className="form-control border border-danger" aria-describedby="searchField" placeholder="Sök" />
                </div>
                <div className="col-1">
                    <button className="btn btn-outline-danger"><i className="fa fa-search search-section-color-gray"></i></button>
                </div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-12 text-center">
                            <button className="btn btn-danger" onClick={this.onShowFilter}>Filter</button>
                        </div>
                        <div className="col-12 text-center search-section-arrow-down">
                            <i id="angle-down" className="fa fa-angle-down"></i><i id="angle-up" className="fa fa-angle-up"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchSection;