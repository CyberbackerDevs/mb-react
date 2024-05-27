
// import React, { useEffect, useState } from "react";

function PRequest(params) {
    return (
        <div className="d-dashboard-content-item">
            <div className="d-dashboard-content-item-inner">
                <h4>Pending Request</h4>
                <ul>
                    <li>Show pending request or WIP request that the logged in MB personel is handling</li>
                    <li>only show requests under logged in user</li>
                    <li>create a link that will redirect to the request page</li>
                </ul>
            </div>
        </div>
    );
}

export default PRequest;