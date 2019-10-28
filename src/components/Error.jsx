import React, { Component } from 'react';
import img from "../error.png";

export default class Error extends Component {
    render() {
        return (
            <>
                <img src={img} alt="error" />
            </>
        )
    }
}
