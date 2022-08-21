import React, { Component } from 'react';

class Base extends Component {
    state = {  } 
    render() { 
        return (
            <div className="card" style={{marginTop: '20px'}}>
                <div className="card-body">
                    <h4> {this.props.children}</h4>
                </div>
            </div>
        );
    }
}
 
export default Base;