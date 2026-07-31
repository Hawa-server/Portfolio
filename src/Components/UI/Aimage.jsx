import React from 'react';

function Aimage(props) {
    return (
        <div>
           <img src = {props.src} alt = {props.alt} className='w-full h-100 rounded-md' /> 
        </div>
    );
}

export default Aimage;