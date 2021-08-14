import React from 'react';
import PropTypes from 'prop-types';

Name.propTypes = {

};

function Name(props) {
    return (
        <div className="row mb-4">
            <div className="col-md-12">
                <div className="card-header d-flex justify-content-between">
                    <div>
                        <span>Họ và tên: Nguyễn Đức Tùng</span>
                    </div>
                    <div>
                        <i className="fa fa-clock" /> 15:49
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Name;