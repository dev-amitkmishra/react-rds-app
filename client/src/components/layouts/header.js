import React from 'react';
import logo from '../../assets/logo.svg'
import account from '../../assets/account.svg'
import calendar from '../../assets/calendar.svg'

const Header = () => (
    <header className="header fixed-top col" style={{ background: '#439eff' }}>
        <div className="row py-2">
            <div className="col-12 ">
                <div className="float-left">
                    <img src={logo} width="30" />
                </div>
                <div className="float-right">
                    <img src={account} width="30" />
                </div>
            </div>
        </div>

        <div className="row py-2">
            <div className="col-12 text-center">
                <img src={calendar} width="30" />
            </div>
        </div>
    </header>
)

export default Header;