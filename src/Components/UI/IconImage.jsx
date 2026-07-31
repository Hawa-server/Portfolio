import React from 'react';

function IconImage(props) {
    return (
        <div>
           <img src={props.src} alt = {props.alt}/> 
        </div>
    );
}

export default IconImage;