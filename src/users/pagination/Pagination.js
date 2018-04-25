import React from 'react';
import './Pagination.css';

class Pagination extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <nav className="pagination-center" aria-label="...">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="">&#60;&#60;</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="">1</a></li>
                            <li className="page-item active">
                                <a className="page-link" href="">2 <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="page-item"><a className="page-link" href="">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="">&#62;&#62;</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Pagination;