import React from 'react';
import './Home.css';
import Box from "./Box";
class Home extends React.Component {
    render(){
        return(
            <>

                <section className='home-section'>
                    <Box/>
                </section>
            </>
        )
    }
}
export default Home;