import React, { Component } from 'react';
import './BasicInfo.css';

// Medium
// Passing props to this component that contains the structure for the information to display on the browser.
class BasicInfo extends Component {
    render() {
        return (
            <div style={{marginBottom: '40px'}}>
              <p>{this.props.p.name}</p>
              <p>{this.props.p.number}</p>
              <p>{this.props.p.dateOfBirth}</p>
            </div>
        );
    }
}

export default BasicInfo;