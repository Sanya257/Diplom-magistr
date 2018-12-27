import React from 'react';
import './Boxes.css';

class NowVisitorBox extends React.Component {

    render(){

        return(
            <div className='now-visitor-box'>
                <div id="embed-api-auth-container"></div>
                <div id="chart-1-container"></div>
                <div id="chart-2-container"></div>
                <div id="view-selector-1-container"></div>
                <div id="view-selector-2-container"></div>
            </div>

        )
    }
}
export default NowVisitorBox;