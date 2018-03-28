import React, { Component } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import CompanyList from "../components/CompanyList";
// import { contacts } from "../../data/contacts";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(searchTerm) {
        this.setState({ searchTerm });
    }

    render() {
        return (
            <div>
                <Header name="Companies" />
                <Search handleSearch={this.handleSearch} />
                <CompanyList searchTerm={this.state.searchTerm} companies={this.props.companies} />
            </div>
        );
    }
}