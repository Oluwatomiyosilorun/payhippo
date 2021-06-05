import React from 'react';
import {Link} from 'react-router-dom';


const Bvn = () => {
    return (
        <div className="verify">
            <h2>Bank Verification Number</h2>
            <small>Industry regulation requires we collect this information to verify your identity.</small>
            
            <hr/>
            <form className="d-sm-block d-md-none d-lg-none">
                <div className="col-sm-12 p-0">
                    <input type="text" className="form-control" id="bvn" />
                </div>
            </form>
            <form className="d-lg-flex d-md-flex d-none mt-4">
                <input type="tel" className="tel_box form-control" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
            </form>

            <p className="reset">
                <Link to="">Can’t remember your BVN?</Link>
            </p>
            <div className="d-flex">
                <button type="submit" className="btn btn-default mr-4 px-4">
                    <Link to="/business">Back</Link>
                </button>
                <button type="submit" className="btn next px-4">
                    <Link to="/dashboard">Next</Link>
                </button>
            </div>
        </div>
    );
};

export default Bvn;

