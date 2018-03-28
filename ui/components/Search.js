import React, { Component } from "react";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleExit = this.handleExit.bind(this);
    }
    handleChange(e) {
        e.preventDefault();
        this.setState(
            { value: e.target.value },
            () => this.props.handleSearch(this.state.value)
        );
    }

    handleExit(e) {
        e.preventDefault();
        this.setState(
            { value: "" },
            () => this.props.handleSearch(this.state.value)
        );
    }

    render() {
        return (
            <div className="search">
                <span className="fa fa-search search-icon" />
                <input className="search-box" placeholder="Search" onChange={this.handleChange} value={this.state.value}/>
                <span className="fa fa-times search-exit" onClick={this.handleExit}/>
            </div>
        )
    }
} 