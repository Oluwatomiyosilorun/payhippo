import React from 'react';
import {Link} from 'react-router-dom';


const VerifyPhone = () => {
    return (
        <div className="verify">
            <h2>Verify your Phone Number</h2>
            <small>We have sent an SMS message with your verification code to your phone number.</small>
            
            <hr/>
            <form className="d-flex justify-content-between w-75 mt-4">
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
                <input type="tel" className="tel_box form-control" minLength="1" maxlength="1"/>
            </form>

            <p className="reset">
                <Link to="#">Resend OTP</Link>
            </p>
            <div className="d-flex">
                <button type="submit" className="btn btn-default mr-4 px-4">
                    <Link to="/">Back</Link>
                </button>
                <button type="submit" className="btn next px-4">
                    <Link to="/business">Next</Link>
                </button>
            </div>
        </div>
    );
};

export default VerifyPhone;