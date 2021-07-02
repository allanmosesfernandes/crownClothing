import React from 'react';
import Directory from '../../components/directory'
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";


function homepage(props) {
    return (
        <div className='homepage'>
            {/* <Link to='/topic'>Topic</Link> */}
            {/* <button onClick={() => props.history.push('/nutjob')}>Take me home</button> */}
           <Directory history= {props.history}/>
        </div>
    )
}

export default homepage
