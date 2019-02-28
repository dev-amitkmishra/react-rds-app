import React from 'react';
import ProgressBar from './progress'


const Card = (props) => (
    <div className="col-12 col-md-3 m-md-4 mt-3 border p-3">
        <p>{props.data.caption}</p>
        <ProgressBar rawValue={props.data.cells[0].rawValue} />

        {props.data.cells[0].formattedValue ?
        <div>
            <span className="mx-2" style={{fontSize:'150%'}}>{props.data.cells[0].formattedValue}</span>
            <span>out of 9</span>
        </div>
        : <p>No data for {props.data.caption} yet</p>}
    </div>
)

export default Card