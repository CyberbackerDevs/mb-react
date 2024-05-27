import React, { useEffect, useState } from "react";
import Navi from './../components/global/navigation';
import UserMenu from './../components/global/userMenu';
import Search from './../components/global/search';
import './../assets/css/dashboard.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faHouse, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faHouse, faFileInvoiceDollar);

function Referrals(params) {
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
                        <h4>Referrals Page</h4>
                        <h5>Growth Referrals Info</h5>
                            <ul>
                                <li>Show referree information: name, address, contact info</li>
                                <li>show referrer as er referee</li>
                                <li>display by filter: referree, referred by, </li>
                            </ul>
                        <h5>Growth Referrals Calculation</h5>
                            <ul>
                                <li>Calcualte profit share as per referree</li>
                            </ul>
                        <h5>Career Referrals info</h5>
                            <ul>
                                <li>Show referral information: name, assignment, contact info</li>
                                <li>show referrer as er referee</li>
                                <li>display by filter: referree, referred by, </li>
                            </ul>
                        <h5>Career Referrals Calculation</h5>
                            <ul>
                                <li>Calcualte profit share as per referree, given that the refferee is working as revenuew producing </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Referrals;