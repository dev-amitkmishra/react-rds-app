import React from 'react';
import pulse from '../../assets/pulse.svg'
import leaderboard from '../../assets/leaderboard.svg'
import notifications from '../../assets/notifications.svg'

const Footer = () => (
    <footer className="footer col fixed-bottom z-top" style={{ background: '#439eff' }}>
        <div className="row py-3">
            <div className="col text-center">
                <img src={pulse} width="25" />
            </div>
            <div className="col text-center">
                <img src={leaderboard} width="25" />
            </div>
            <div className="col text-center">
                <img src={notifications} width="25" />
            </div>
        </div>
    </footer>
)

export default Footer;