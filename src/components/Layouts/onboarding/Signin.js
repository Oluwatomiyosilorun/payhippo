import React from 'react';
import {Link} from 'react-router-dom';

const Signin = () => {
    return (
        <div className="form_container">
            <h2>Tell us about you</h2>
            <small>We need basic information about you so we can give you best offers.</small>
            
            <hr/>

            <form>
                <div class="form-group col-lg-12 d-flex flex-wrap p-0">
                    <div className="col-sm-12 col-lg-6 leftpad">
                        <label for="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>

                    <div className="col-sm-12 col-lg-6 rightpad">
                        <label for="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>
                </div>

                <div class="form-group col-lg-12 d-flex flex-wrap p-0">
                    <div className="col-sm-12 col-lg-6 leftpad">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>

                    <div className="col-sm-12 col-lg-6 rightpad">
                        <label for="phone">Phone</label>
                        <input type="tel" className="form-control" id="phone" />
                    </div>
                </div>

                <div class="form-group col-lg-12 d-flex flex-wrap p-0">
                    <div className="col-sm-12 col-lg-6 leftpad">
                        <label for="marital">Marital Status</label>
                        <select className="form-control">
                            <option></option>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Divorced</option>
                        </select>
                    </div>

                    <div className="col-sm-12 col-lg-6 rightpad">
                        <label for="dob">Date of Birth</label>
                        <input type="date" className="form-control" id="dob" />
                    </div>
                </div>

                <div class="form-group col-lg-12 d-flex flex-wrap p-0">
                    <div className="col-sm-12 col-lg-6 leftpad">
                        <label for="marital">Gender</label>
                        <select className="form-control">
                            <option></option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>

                    <div className="col-sm-12 col-lg-6 rightpad">
                        <label for="dob">Highest attained qualification</label>
                        <select className="form-control">
                            <option></option>
                            <option>OND</option>
                            <option>HND/Bsc.</option>
                            <option>Masters</option>
                            <option>PHd.</option>
                        </select>                   
                    </div>
                </div>
               
                <button type="submit" className="btn next mt-4 px-4">
                    <Link to="/verify-phone">Next</Link>
                </button>
            </form>
        </div>
    );
};

export default Signin;