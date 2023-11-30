import React from 'react';
import { BsExclamationCircleFill } from 'react-icons/bs';
function Error({ error }){
    return (
        <div className='ErrorDiv'>
            <BsExclamationCircleFill className="circleExc" />
            <div className='ErrorText'>Error: {error}</div>
        </div>
    )

}

export default Error;
