import React, { Component } from 'react';
import Base from './base';
import { connect } from 'react-redux/es/exports';
import DigitButton from './calc/clickbutton';
import ACTIONS from '../redux/action';
import SymbolButton from './calc/SymbolButton';

class Calc extends Component {
    state = { 
        
     } 
    render() { 
        return (
            <React.Fragment>
                <Base>
                    <div className="calc">
                        <div className="output">
                            <div className="last-output">
                                {this.props.lastOperand}{this.props.operation}
                            </div>
                            <div className="current-output">
                                {this.props.currentOperand}
                            </div>
                        </div>
                        <button className='span-1' onClick={this.props.clear}>AC</button>
                        <button onClick={this.props.delete_digit}>Del</button>
                        <SymbolButton operation={"/"}></SymbolButton>
                        <DigitButton digit={"7"}></DigitButton>
                        <DigitButton digit={"8"}></DigitButton>
                        <DigitButton digit={"9"}></DigitButton>
                        <SymbolButton operation={"*"}></SymbolButton>
                        <DigitButton digit={"4"}></DigitButton>
                        <DigitButton digit={"5"}></DigitButton>
                        <DigitButton digit={"6"}></DigitButton>
                        <SymbolButton operation={"+"}></SymbolButton>
                        <DigitButton digit={"1"}></DigitButton>
                        <DigitButton digit={"2"}></DigitButton>
                        <DigitButton digit={"3"}></DigitButton>
                        <SymbolButton operation={"-"}></SymbolButton>
                        <DigitButton digit={"0"}></DigitButton>
                        <DigitButton digit={"."}></DigitButton>
                        <button onClick={this.props.evaluate} className='span-2'>=</button>
                    </div>
                </Base>

            </React.Fragment>
        );
    }
}

const mapStateToProps =(state,props)=>{
    return {
        currentOperand:state.currentOperand,
        lastOperand:state.lastOperand,
        operation:state.operation,
    }
}

const mapDispatchToProps ={
    delete_digit:()=>{
        return{
            type:ACTIONS.DELETE_DIGIT,
        }
    },

    clear:()=>{
        return {
            type:ACTIONS.CLEAR,
        }
    },

    evaluate:()=>{
        return {
            type:ACTIONS.EVALUATE,
        }
    },

}
 
export default connect(mapStateToProps,mapDispatchToProps)(Calc);