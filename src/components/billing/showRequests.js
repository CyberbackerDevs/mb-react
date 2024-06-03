
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function ShowRequests(params) {
    const [requets, setRequests] = useState([
        {"client_id": "123541233","client_name": "client 1","type": "isf","cost": 150.23, "source": "growth", "owned": "John peter Doe"},
        {"client_id": "123541233","client_name": "client 2","type": "msf","cost": 150.23, "source": "career", "owned": "John peter Doe"},
        {"client_id": "123541233","client_name": "client 3","type": "cb_bomus","cost": 150.23, "source": "bonus", "owned": "John peter Doe"},
        {"client_id": "123541233","client_name": "client 4","type": "isf","cost": 150.23, "source": "growth", "owned": "John peter Doe"},
        {"client_id": "123541233","client_name": "client 5","type": "oc","cost": 150.23, "source": "admin", "owned": "John peter Doe"},
        {"client_id": "123541233","client_name": "client 1","type": "isf","cost": 150.23, "source": "growth", "owned": "John peter Doe"},
        {"client_id": "123541233","client_name": "client 2","type": "msf","cost": 150.23, "source": "career", "owned": "John peter Doe"},
        {"client_id": "123541233","client_name": "client 3","type": "cb_bomus","cost": 150.23, "source": "bonus", "owned": "John peter Doe"},
        {"client_id": "123541233","client_name": "client 4","type": "isf","cost": 150.23, "source": "growth", "owned": "John peter Doe"},
        {"client_id": "123541233","client_name": "client 5","type": "oc","cost": 150.23, "source": "admin", "owned": "John peter Doe"}
    ]);

    return (
        <div className="d-billing-content-item">
            <div className="d-billing-content-item-inner">
                <div className="d-section-header">
                    <h4>Show Requests</h4>
                    <div className="d-sh-options">
                        <div className="d-option-item">
                            <select name="" id="">
                                <option value="">Transaction Type</option>
                                <option value="isf">Initial Setup Fee</option>
                                <option value="msf">Monthly Service Fee</option>
                                <option value="oc">Operational Cost</option>
                                <option value="cb_bomus">CB Bonus</option>
                            </select>
                            <select name="" id="">
                                <option value="Someone Person">Someone Person</option>
                                <option value="John peter Doe">John peter Doe</option>
                                <option value="sample one">sample one</option>
                            </select>
                            <select name="" id="">
                                <option value="growth">Growth</option>
                                <option value="career">Career</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="d-show-request-info">
                    <div className="d-sr-inner">
                        <div className="d-sr-title">
                            <div className="d-sr-titem d-sr-iti-details">Details</div>
                            <div className="d-sr-titem d-sr-iti-type">Type</div>
                            <div className="d-sr-titem d-sr-iti-cost">Cost</div>
                            <div className="d-sr-titem d-sr-iti-owned">Responsible</div>
                        </div>
                        {requets.map((list, index) => (
                            <div className="d-sr-item">
                                <div className="d-sr-litem d-sr-iti-details">
                                    <div className="d-client-name">{list.client_name} <FontAwesomeIcon icon="square-arrow-up-right" /></div>
                                    <div className="d-client-id">{list.client_id}</div>
                                </div>
                                <div className="d-sr-litem d-sr-iti-type">
                                    <div className="d-req-type">
                                        {list.type == 'isf' ? (
                                            <div>Initial Setup Fee</div>
                                        ) : list.type == 'msf' ? (
                                            <div>Monthly Service Fee</div>
                                        ) : list.type == 'cb_bomus' ? (
                                            <div>Cyberbacker Bonus</div>
                                        ) : list.type == 'oc' ? (
                                            <div>Operational Cost</div>
                                        ) : (
                                            <div></div> 
                                        )}
                                    </div>
                                    <div className="d-req-source">{list.source}</div>
                                </div>
                                <div className="d-sr-litem d-sr-iti-cost">
                                    <div className="d-req-cost">${list.cost}</div>
                                </div>
                                <div className="d-sr-litem d-sr-iti-owned">{list.owned}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <ul>
                    <li>show open requests as per logged in user</li>
                    <li>show all open requests as per filter</li>
                    <li>enable filters: show by client, date requested, status</li>
                    <li>status: active, pending, rejected, close</li>
                </ul>
            </div>
        </div>
    );
}

export default ShowRequests;