import React from 'react';
import './FilterListing.css';

class FilterListing extends React.Component {
    render() {
        return (
            <div id="filter" className="row filter-listing-main filter-listing-intern">
                <div className="col-12">
                    <input type="checkbox" />&nbsp;Kategori
                </div>
                <div className="col-12">
                    <input type="checkbox" />&nbsp;Språk
                </div>
            </div>
        );
    }
}

export default FilterListing;