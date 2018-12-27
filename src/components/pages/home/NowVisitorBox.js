import React from 'react';
import './Boxes.css';
import Example from "./Example";

class NowVisitorBox extends React.Component {

    render(){

        return(
            <div className='now-visitor-box'>
               <Example/>
            </div>

        )
    }
}
export default NowVisitorBox;