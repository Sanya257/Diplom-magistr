import React from 'react';
import './TopMenu.css'
class TopMenu extends React.Component {
    render(){
        return(
           <>
               <header className='top-header'>
                   <nav>
                       <button className="fas fa-bars"></button>
                       <div className='user-panel'>
                       <button className='add-notification'>add notification</button>
                       <button className="fas fa-bell"><div>1</div></button>
                       <div className='user-icon'>
                           <button className="user-logo"></button>
                           <h4 className="user-name">Oleksandr Kutsopatruy</h4>
                       </div>
                       </div>
                   </nav>
               </header>
           </>
        )
    }
}
export default TopMenu;