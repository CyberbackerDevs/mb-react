
// import React, { useEffect, useState } from "react";

function RequestHistory(params) {
    return (
        <div className="d-dashboard-content-item">
            <div className="d-dashboard-content-item-inner">
                <h5>Requests History</h5>
                <ul>
                    <li>show request history as per filter</li>
                    <li>Filter Types: Date recieved, date approved, data closed, activities as per date</li>
                </ul>
            </div>
        </div>
    );
}

export default RequestHistory;