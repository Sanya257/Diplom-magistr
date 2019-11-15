import React from 'react';
import './Boxes.css';
class OrdersBox extends React.Component {
    render(){
        return(

            <div className='orders-box'>
                <header className='orders-header-box '>
                  Orders
                </header>
                <div className="orders-box-body">
                    <i className="fas fa-shopping-cart"></i>
                    <span>46</span>
                </div>
            </div>

        )
    }
}
export default OrdersBox;