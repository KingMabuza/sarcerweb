import React from 'react';
import {Link} from "@reach/router";
function Nav() {
    return(
        <div className={'row navigation'}>
                
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
        </div>
    )
}

export default Nav
