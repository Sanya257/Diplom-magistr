import React from 'react';
import './Home.css';
import SalesBox from "./SalesBox";
import MembersBox from "./MembersBox";
import OrdersBox from "./OrdersBox";
import VisitorsBox from "./VisitorsBox";
import NowVisitorBox from "./NowVisitorBox";
import Notofication from "./Notofication";

class Home extends React.Component {
    render() {
        return (
            <>
                <section className='home-section'>
                    <div className='statistic-box-item'>
                        <OrdersBox/>
                        <SalesBox/>
                        <MembersBox/>
                        <VisitorsBox/>
                        <NowVisitorBox/>
                        <Notofication/>
                    </div>

                </section>
            </>
        )
    }
}

export default Home;