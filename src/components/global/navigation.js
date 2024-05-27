import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigation(params) {
    return (
        <div className="d-dashboard-navi">
            <div className="d-dashboard-navi-inner">
                <div className="d-dashboard-navi-logo">show mb logo</div>
                <div className="d-dashboard-navi-menu">
                    <div className="d-dashboard-navi-menu-items">
                        <div className="d-dash-navi-menu-item">
                            <div className="d-dash-navi-menu-icon"><FontAwesomeIcon icon="house" /></div>
                            <div className="d-dash-navi-menu-text"><a href="/dashboard">Dashboard</a></div>
                        </div>
                        <div className="d-dash-navi-menu-item">
                            <div className="d-dash-navi-menu-icon"><FontAwesomeIcon icon="file-invoice-dollar" /></div>
                            <div className="d-dash-navi-menu-text"><a href="/billing">Billings</a></div>
                        </div>
                        <div className="d-dash-navi-menu-item">
                            <div className="d-dash-navi-menu-icon"><FontAwesomeIcon icon="file-invoice-dollar" /></div>
                            <div className="d-dash-navi-menu-text"><a href="/referrals">Referral</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;