import React, { Component } from 'react';
import './BasicInfo.css';

// Medium
class BasicInfo extends Component {
    render() {
        return (
            // this.props is the object that contains the attributes that we passed in the parent component, which is our App.js
            <div>
                <h2>{`Person: ${this.props.p.id}`}</h2>
                <p>{this.props.p.name}</p>
                <p>{this.props.p.number}</p>
                <p>{this.props.p.dateOfBirth}</p>
            </div>
        );
    }
}

export default BasicInfo;

// How to pass state into a class component?
// You can pass state as a prop