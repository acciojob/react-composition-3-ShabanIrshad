import React, { useState } from 'react';

const Tooltip=({text})=>{
    const [tip,setTip]=useState(false);
    const showTip=()=>{
        setTip(true);
    }
    const hideTip=()=>{
        setTip(false);
    }
    return (
        <>
            {tip?<div className='tooltip'>{text}</div>:''}
            <p onMouseEnter={showTip} onMouseLeave={hideTip} className='tooltiptext'>Hover me</p>
        </>
    );
}
export default Tooltip;