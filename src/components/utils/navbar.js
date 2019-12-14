import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import '../home/homePageAB.css';
import logo from '../../images/logo192.png';

class Navbar extends Component{
    render(){
        return(
                <div>
                    <div id="menu-bar">
                        <Link to="/"><img className="logoImg" alt="logoImg" src={logo}/></Link>
                        <nav className="menbarNav">
                            <ul>
                                <li><Link className="menubarATag" to="/help">Help</Link></li>
                                <li><NavLink className="menubarATag" to="/signup">SignUp</NavLink></li>
                                <li><Link className="menubarATag" to="/login">Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            );
        }
    }
    
    export default Navbar;