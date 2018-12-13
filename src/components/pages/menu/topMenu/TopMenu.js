import React from 'react';
import './TopMenu.css'
class TopMenu extends React.Component {
    render(){
        return(
           <>
               <header className='top-header'>
                   <nav>
                       <a href='/' className='menu'>d</a>
                       <a href='da' className='userIcon'>icon</a>
                   </nav>
               </header>
           </>
        )
    }
}
export default TopMenu;