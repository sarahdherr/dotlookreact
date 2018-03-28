import React from "react";

export default (props) =>
    <div className="listitem">
        <div className="listitem-icon-container">
            <span className="fa fa-building-o listitem-icon" />
        </div>
        <p className="listitem-text">{props.name}</p>
        <div className="listitem-score">
            <p className="listitem-score-text">{props.score > 9 ? props.score : `0${props.score}`}</p>
        </div>
    </div>