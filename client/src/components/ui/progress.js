import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const percentage = (rawValue) => {
    return parseInt(rawValue * 100 / 9)
}

const status = (props) => {

    if (props.rawValue < 5) {
        return 'error'
    } else if (props.rawValue > 5 && props.rawValue <= 7) {
        return 'active'
    } else if (props.rawValue > 7 && props.rawValue <= 9) {
        return 'success'
    }

}

const ProgressBar = (props) => {
    return (
        <Progress

            percent={percentage(props.rawValue)}

            status={status(props)}

            theme={
                {
                    error: {
                        trailColor: '#ccc',
                        color: '#FF5C5C'
                    },
                    active: {
                        trailColor: '#ccc',
                        color: '#F5B31F'
                    },
                    success: {
                        trailColor: '#ccc',
                        color: '#62DDA9'
                    }
                }
            }

        />
    )
}

export default ProgressBar