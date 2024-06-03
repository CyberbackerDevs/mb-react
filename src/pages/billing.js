import React, { useEffect, useState } from "react";
import Navi from './../components/global/navigation';
import UserMenu from './../components/global/userMenu';
import Search from './../components/global/search';
import ShowRequests  from './../components/billing/showRequests';
import RequestHistory  from './../components/billing/requestHistory';
import './../assets/css/dashboard.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faHouse, faFileInvoiceDollar, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon, faHouse, faFileInvoiceDollar, faSquareArrowUpRight);

function Billing(params) {
    useEffect(() => {
        document.title = 'Billing | Moneybacker Department'
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
                        <h3>Billing Page</h3>
                        <ShowRequests />
                        
                        <h5>Create Requests</h5>
                            <ul>
                                <li>create a request</li>
                                <li>Types of request for Growth: Setup fee, MSF, Bonus</li>
                                <li>Types of request for Career: Service Fee, </li>
                                <li>Types of request for Cyberbacker: Service Fee, Refunds, Merchandise</li>
                                <li>Types of request for Operations: Operational Costing</li>
                                <li>for bonus - only nina process the bonus - charges the client separately</li>
                            </ul>
                        <RequestHistory />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billing;