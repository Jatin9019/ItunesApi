import React from 'react';
export const Audiosong=(props)=>{
    console.log("hy",props.src);
    return(
        
        <audio controls>
        <source src={props.src} type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>
    )

}