import React from 'react';

function Navlinks(props) {
    return (
        <div>
            <a href={props.links} className='text-md font-bold hover:text-[#b89b5e]'>
                {props.label}
            </a>
        </div>
    );
}

export default Navlinks;