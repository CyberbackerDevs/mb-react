import React, { useEffect, useState } from "react";

function search(params) {
    return (
        <div className="d-dashboard-main-search">
            <form>
                <div className="d-dashboard-main-search-input">
                    <input type="text" name="main-search" placeholder="Search" />
                    <button>search</button>
                </div>
            </form>
        </div>
    );
}

export default search;