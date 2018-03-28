import React from "react";
import axios from "axios";

import ContactsContainer from "./ContactsContainer";
import CompanyContainer from "./CompanyContainer";
import NavButtons from "../components/NavButtons";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            companies: [],
            showCompany: true
        }
        this.handleNavClick = this.handleNavClick.bind(this);
    }
    componentDidMount() {
        axios.get("https://shielded-everglades-49151.herokuapp.com/api/contacts")
            .then(response => response.data.contacts)
            .then(contacts => this.setState({ contacts }))
            .catch(err => console.log(err));
        
        axios.get("https://shielded-everglades-49151.herokuapp.com/api/companies")
            .then(response => response.data.companies)
            .then(companies => this.setState({ companies }))
            .catch(err => console.log(err));
    }

    handleNavClick(evt, showCompany) {
        evt.preventDefault();
        this.setState({ showCompany });
    }

    render() {
        return (
            <div className="app-container">
                {
                    this.state.showCompany
                    ? <CompanyContainer companies={this.state.companies} />
                    : <ContactsContainer contacts={this.state.contacts}/>
                }
                <NavButtons showCompany={this.handleNavClick} />
            </div>
        );
    }
}