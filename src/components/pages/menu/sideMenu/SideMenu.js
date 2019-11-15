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
                            <li><Link to='/statistics'><img src='/image/statistic-icon.png' alt='icon'/>Statistics</Link></li>
                            <li><Link to='/calendar'><img src='/image/calendar-icon.png' alt='icon'/>Calendar</Link></li>
                            <li className={`team-menu ${drop}`} onClick={this.dropdown}><a href='#'><i
                                className="fas fa-users" style={{color: "#4772dd"}}></i>Teams</a>
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
                            <li><Link to='/chat'><i className="far fa-comment-alt" style={{color: "#4772dd"}}></i>Chat</Link></li>
                            <li><Link to='/users'><img src='/image/user-icon.png' alt='icon'/>Users</Link></li>
                            <li><Link to='settings'><img src='/image/settings-icon.png' alt='icon'/>Settings</Link></li>
                        </ul>
                    </nav>
                </section>
            </>
        )
    }
}

export default SideMenu;