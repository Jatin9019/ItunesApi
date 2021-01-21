import React from 'react';
import {Audiosong} from './Audio';
export const SearchList=(props)=>{
    let totalNumberOfRecords=props.Audiodata.length;
    const norecord =(
        <p>No Record Found</p>
    )
    const successrecord =(
        <>
        <p><label>List of records {totalNumberOfRecords}</label></p>
        {props.Audiodata.map(ele=><Audiosong src={ele.previewUrl} type="audio/mpeg" />)}
        </>
    )
    console.log("Props",props.Audiodata);
    return(
        <div>
            {props.Audiodata.length==0?norecord:successrecord}
            
        </div>
    );
}