import React, { Component } from 'react';
import ACTIONS from '../../redux/action';
import { connect } from 'react-redux/es/exports';

class SymbolButton extends Component {
    state = {  } 
    render() { 
        return (
            <button
                onClick={()=>this.props.choost_operation(this.props.operation)}
            >
                {this.props.operation}
            </button>
        );
    }
}

const mapDispatchToProps ={

    choost_operation:operation =>{
        return {
            type:ACTIONS.CHOOST_OPERATION,
            operation:operation,
        }
    }
}




 
export default connect(null,mapDispatchToProps)(SymbolButton);