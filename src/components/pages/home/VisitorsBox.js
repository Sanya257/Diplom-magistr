import React from 'react';
import './Boxes.css';
class VisitorsBox extends React.Component {
    render(){
        return(

            <div className='visitors-box'>
                <header className='sales-header-box '>
                    Views
                </header>
                <div className="sales-box-body">
                    <i className="fas fa-eye"></i>
                    <span>123</span>
                </div>
            </div>

        )
    }
}
export default VisitorsBox;