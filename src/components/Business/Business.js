import React from 'react';
import { Link } from 'react-router-dom';


const Business = () => {
    return (
        <div className="form_container">
            <h2>Tell us about your Business</h2>
            <small>Business Details</small>
            
            <hr/>

            <form>
                <div class="form-group col-lg-12 p-0">
                    <label for="BizName">Business label</label>
                    <input type="text" className="form-control" id="BizName" />
                </div>

                <div class="form-group col-lg-12 d-flex flex-wrap p-0">
                    <div className="col-sm-12 col-lg-6 leftpad">
                        <label for="type-of-business">Type of Business</label>
                        <select className="form-control">
                            <option></option>
                        </select>
                    </div>

                    <div className="col-sm-12 col-lg-6 rightpad">
                        <label for="phone">Business Phone Number</label>
                        <input type="tel" className="form-control" id="phone" />
                    </div>
                </div>

                <div class="form-group col-lg-12 d-flex flex-wrap p-0">
                    <div className="col-sm-12 col-lg-6 leftpad">
                        <label for="address1">Business Address</label>
                        <input type="text" className="form-control" id="add2" />
                    </div>

                    <div className="col-sm-12 col-lg-6 rightpad">
                        <label for="address2">Business Owner Address</label>
                        <input type="text" className="form-control" id="add1" />
                    </div>
                </div>

                <div class="form-group col-lg-12 p-0">
                    <label for="lending">Other Lending Platform You Use</label>
                    <input type="text" className="form-control" id="lending" />
                </div>
               
                <div className="d-flex">
                <button type="submit" className="btn btn-default mr-4 px-4">
                    <Link to="/verify-phone">Back</Link>
                </button>
                <button type="submit" className="btn next px-4">
                    <Link to="/bvn">Next</Link>
                </button>
            </div>
            </form>
        </div>
    );
};

export default Business;