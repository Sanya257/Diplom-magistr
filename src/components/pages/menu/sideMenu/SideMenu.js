import React from 'react';
import './SideMenu.css'
import {Link} from 'react-router-dom'
class SideMenu extends React.Component {
    render(){
        return(
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
                           <li><Link to='teams'>Teams</Link>
                           <ul>
                               <li><Link to='/seo'/>SEO</li>
                               <li><Link to='/smm'/>SMM</li>
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