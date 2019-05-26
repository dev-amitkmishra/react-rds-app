import React from 'react';

const CardComponent = (props) => {
    const queryData = props.location.query || '';
    return (
        <div>
            <span style={{color: queryData.color}}>{queryData.option}</span>
        </div>
    );
}

export default CardComponent;