import React from 'react';

function Image(props) {
    return (
        <div>
            <img src={props.src} alt={props.alt} className='h-80 w-100 object-cover rounded-t-md '/>
        </div>
    );
}

export default Image;