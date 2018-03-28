import React, { Component } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import ContactList from "../components/ContactList";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.nameMapping = this.nameMapping.bind(this);
    }

    handleSearch(searchTerm) {
        this.setState({ searchTerm });
    }

    nameMapping(contacts) {
        var newContacts = contacts.map(c => {
            var nameArr = c.name.split(" ");
            c.firstName = nameArr[0];
            c.lastName = nameArr[1];
            return c;
        });
        return newContacts;
    }

    render() {
        console.log(this.props.contacts);
        var contacts = this.nameMapping(this.props.contacts);
        console.log("Mapped", contacts);
        return (
            <div>
                <Header name="Contacts" />
                <Search handleSearch={this.handleSearch} />
                <ContactList searchTerm={this.state.searchTerm} contacts={this.props.contacts} />
            </div>
        );
    }
}