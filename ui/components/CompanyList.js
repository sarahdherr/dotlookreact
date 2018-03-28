import React from "react";
import ListItem from "./ListItem";
// import { companies } from "../../data/companies";

const Infinite = require('react-infinite')

export default (props) =>
    <div className="contactslist">
        <Infinite containerHeight={824} elementHeight={50}>
        {
            props.companies
                .slice()
                .sort((a, b) => b.score - a.score)
                .filter(c => c.name.toLowerCase().includes(props.searchTerm.toLowerCase()))
                .map(el => 
                    <ListItem key={el.id} name={el.name} score={el.score} />
                )
        }
        </Infinite>
    </div>