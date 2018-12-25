import React from 'react';
import './SideMenu.css'
import {Link} from 'react-router-dom'

class SideMenu extends React.Component {
    constructor(props) {
        super(props);
    this.state={
        dropMenu:false
    }
    }
dropdown=()=>{
this.setState({dropMenu:!this.state.dropMenu});
};
    render() {
        let drop;
        if(this.state.dropMenu===true){
            drop='drop';
        }
        return (

            <>
                <section className='sideMenu'>
                    <header>
                        <div className="logo">LOGO</div>
                    </header>
                    <nav>
                        <ul className='menu'>
                            <li><Link to='/'><img src='/image/home-icon.png' alt='icon'/>Home</Link></li>
                            <li><Link to='/statistics'>Statistics</Link></li>
                            <li><Link to='/calendar'>Calendar</Link></li>
                            <li className={`team-menu ${drop}`} onClick={this.dropdown}><a href='#'>Teams</a>
                                <ul>
                                    <li><Link to='/seo-team'>SEO-Specialist</Link></li>
                                    <li><Link to='/ppc-team'>PPC Specialist</Link></li>
                                    <li><Link to='/smm-team'>SMM Manager</Link></li>
                                    <li><Link to='/sales-team'>Sales Manager</Link></li>
                                    <li><Link to='/content-team'>Content Manager</Link></li>
                                    <li><Link to='/programmer-team'>Programmer</Link></li>
                                    <li><Link to='/design-team'>Designers</Link></li>
                                </ul>
                            </li>
                            <li><Link to='/chat'>Chat</Link></li>
                            <li><Link to='/users'>Users</Link></li>
                            <li><Link to='settings'>Settings</Link></li>
                        </ul>
                    </nav>
                </section>
            </>
        )
    }
}

export default SideMenu;