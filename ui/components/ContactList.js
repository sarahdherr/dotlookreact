import React from "react";
import ListItem from "./ListItem";

const Infinite = require('react-infinite')

const Item = (props) =>
    <div className="listitem">
        <div className="listitem-contacticon-container">
            <p className="listitem-contacticon">{props.firstName[0].toUpperCase()}{props.lastName[0].toUpperCase()}</p>
        </div>
        <div>
            <p className="listitem-contactname-text">{props.name}</p>
            <p className="listitem-contactcomp-text">{props.company}</p>
        </div>
        <div className="listitem-score">
            <p className="listitem-score-text">{props.score > 9 ? props.score : `0${props.score}`}</p>
        </div>
    </div>

export default (props) =>
    <div className="contactslist">
        <Infinite containerHeight={824} elementHeight={50}>
        {
            props.contacts
                .slice()
                .sort((a, b) => b.score - a.score)
                .filter(c => 
                    c.name.toLowerCase().includes(props.searchTerm.toLowerCase()) 
                    || c.company.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
                .map(el => 
                    <Item key={el.id} name={el.name} firstName={el.firstName} lastName={el.lastName} score={el.score} company={el.company.name}/>
                )
        }
        </Infinite>
    </div>