import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { navArray } from './TopNavConstants';


const TopNav = () => {
    const [nav, setNav] = useState('1');
    return (
        <div className="number_carrier d-none d-md-flex d-lg-flex">
               {
                   navArray.map(navs=>(
                        <div className="number">
                            <p key={navs.name}>
                                <Link to={navs.path} className={nav === navs.name ? 'active' : ""} onClick={()=>setNav(navs.name)}>{navs.name}</Link>
                            </p>
                        </div>
                   ))
               }
        </div>
    );
};

export default TopNav;