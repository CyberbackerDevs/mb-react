import React, { useEffect, useState } from "react";
import Navi from './../components/global/navigation';
import UserMenu from './../components/global/userMenu';
import Search from './../components/global/search';
import './../assets/css/dashboard.css';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faHouse, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

library.add(faMoon, faHouse, faFileInvoiceDollar);

function Referrals(params) {
    useEffect(() => {
        document.title = 'Referrals | Moneybacker Department'
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
                                <li>2019 - 2022 - has 2 versions :D</li>
                                <li>V1 - $25 for PT $50 for FT (10 months less than $1500)<br />
                                <br />
                                    V2 - $25 for PT $50 for FT (continuous)<br />
                                    Signed Date from January 31 to March 6, 2023<br />
                                    <br />
                                    V3 - 3% of Contract MSF (continuous) [round - up]<br />
                                    Signed Up Starting March 7, 2023<br />
                                    <br />
                                    V4 - JUST FOR RICH RECTOR (8.33%)<br />
                                    <br />
                                    V5 - ADDITIONAL 3% FROM FRANCHISE OWNERS<br />
                                    <br />
                                    NOTE: Clients who would get additional contracts can now receive referral credits AS LONG AS THEY WERE NOT REFERRED BY ANYONE WHEN THEY FIRST SIGNED
                                    Update: October 17, 2023
                                </li>
                                <li>2023 - infitiy - 3% of MSF of each referee</li>
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
                                <li>depends on the overall income of the client</li>
                                <li>what ever income we gain from the pairing between client and CB</li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Referrals;