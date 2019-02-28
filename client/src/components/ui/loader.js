import React from 'react';

const ListLoader = () => {
    let table = []
    // Outer loop to create parent
    for (let i = 0; i < 5; i++) {
        table.push(
            <div className="col-12 col-md-3 m-md-4 mt-3 border p-3">
                <p className="shine" style={{ height: '25px', width: '100%' }}></p>
                <p className="shine" style={{ height: '25px', width: '100%' }}></p>
                <div>
                    <span className="shine" style={{ height: '25px', width: '30%' }}></span>
                    <span className="shine" style={{ height: '25px', width: '70%' }}></span>
                </div>
            </div>
        )
    }
    return table
}

export default ListLoader
