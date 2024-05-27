import React, { useEffect, useState } from "react";
import Navi from './../components/global/navigation';
import UserMenu from './../components/global/userMenu';
import Search from './../components/global/search';
import './../assets/css/dashboard.css';

/**
 * load dashboard segments
 */
import NewRequest from './../components/dashboard/newRequest';
import PRequest from './../components/dashboard/pendingRequest';
import LogUpdates from './../components/dashboard/logUpdates';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faHouse, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faHouse, faFileInvoiceDollar);

function Dashboard(params) {
    useEffect(() => {
        document.title = 'Dashboard | Moneybacker Department'
    }, [])
    
    return (
        <div className="d-dashboard-main">
            <div className="d-dashboard-inner">
                <Navi />
                <div className="d-dashboard-info">
                    <div className="d-dashboard-header">
                        <Search />
                        <UserMenu />
                    </div>
                    <div className="d-dashboard-contents">
                        <div className="d-header-funtions">
                            <h4>Search</h4>
                            <ul>
                                <li>search will focus on requests and people</li>
                            </ul>
                            <h4>User Menu</h4>
                            <ul>
                                <li>User Profile - will redirect to user profile page</li>
                                <li>Logout - logout to the system</li>
                            </ul>
                        </div>
                        <NewRequest />
                        <PRequest />
                        <LogUpdates />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;