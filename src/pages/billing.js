import React, { useEffect, useState } from "react";
import Navi from './../components/global/navigation';
import UserMenu from './../components/global/userMenu';
import Search from './../components/global/search';
import './../assets/css/dashboard.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faHouse, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faHouse, faFileInvoiceDollar);

function Billing(params) {
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
                        <h4>Billing Page</h4>
                        <h5>Show Requests</h5>
                            <ul>
                                <li>show open requests as per logged in user</li>
                                <li>show all open requests as per filter</li>
                                <li>enable filters: show by client, date requested, status</li>
                                <li>status: active, pending, rejected, close</li>
                            </ul>
                        <h5>Create Requests</h5>
                            <ul>
                                <li>create a request</li>
                                <li>Types of request for Growth: Setup fee, MSF, Bonus</li>
                                <li>Types of request for Career: Service Fee, </li>
                                <li>Types of request for Cyberbacker: Service Fee, Refunds, Bonus, Merchandise</li>
                                <li>Types of request for Operations: Operational Costing</li>
                            </ul>
                        <h5>Requests History</h5>
                            <ul>
                                <li>show request history as per filter</li>
                                <li>Filter Types: Date recieved, date approved, data closed, activities as per date</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billing;