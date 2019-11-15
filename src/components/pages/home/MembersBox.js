import React from 'react';
import './Boxes.css';
class MembersBox extends React.Component {
    render(){
        return(
            <div className='members-box'>
                <header className='sales-header-box '>
                   Members
                </header>
                <div className="sales-box-body">
                    <i className="fas fa-users"></i>
                    <span>623</span>
                </div>
            </div>

        )
    }
}
export default MembersBox;