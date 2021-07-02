import React from 'react'
import {withRouter} from 'react-router-dom'

const  MenuItem = ({ title, imageUrl, size,history, linkUrl,match }) => {
    console.log(match);
    return (
    <div className={` ${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        {/* <h1>{prop.linkuUrl}</h1> */}
        <div className="background-Image"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}>
            
        </div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    )
}

export default withRouter(MenuItem)
