import React from 'react';
import {Link} from 'react-router-dom';
import TopNav from '../../shared/TopNav';
import Logo from '../../../assets/imgs/logo.svg';

const Onboarding = ({children}) => {
    return (
        <main>
            <div className="side_image d-none d-md-block d-lg-block">
                <img src={Logo} alt="" />
                <div className="details">
                    <h4>Seamless financing for small to medium sized African businesses</h4>
                    <small>
                        <Link to="#" className="mt-5">Already have an account? Sign in</Link>
                    </small>
                </div>
            </div>

            <div className="body">
                <div className="m-auto">
                    <img src={Logo} alt="" className="mt-4 d-sm-block d-md-none d-lg-none second-logo"/>

                    <TopNav/>

                    {children}
                </div>
            </div>
        </main>
    );
};

export default Onboarding;