import React from "react";

export default (props) => 
    <div className="navbtns">
        <button className="navbtns-btn" onClick={(e) => props.showCompany(e, true)}>
            <span className="fa fa-building navbtns-icon-comp" />
        </button>
        <button className="navbtns-btn" onClick={(e) => props.showCompany(e, false)}>
            <span className="fa fa-user navbtns-icon-user" />
        </button>
    </div>