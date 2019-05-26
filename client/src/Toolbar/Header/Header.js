import React from 'react';

const header = (props) => {
    return (
        <header className="App-header">
            <label className="switch">
                <input type="checkbox" onClick={props.changed}/>
                <span className="slider round"></span>
            </label>
        </header>
    );
}

export default header;