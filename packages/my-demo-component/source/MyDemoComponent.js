import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Link extends Component {
    static propTypes = {
        message: PropTypes.string.isRequired
    };

    render() {
        const { message } = this.props;
        return <b>{message}</b>;
    }
}
