import React from 'react';

function Logo(props) {
    return (
        <div>
           <img src= {props.src} alt = {props.alt} className='h-10 w-10'/> 
        </div>
    );
}

export default Logo;