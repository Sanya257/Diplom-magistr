import React from 'react';
import './Boxes.css';
class SalesBox extends React.Component {
    render(){
        return(
            <div className='sales-box'>
<header className='sales-header-box '>
     Sales
</header>
<div className="sales-box-body">
    <i className="fas fa-shopping-bag"></i>
    <span>1</span>
</div>
            </div>
        )
    }
}
export default SalesBox;