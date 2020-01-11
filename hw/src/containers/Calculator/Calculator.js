import React, {Component} from 'react';
import "./Calculator.css";
import {connect} from "react-redux";
const numbers = [
    {value: "7"},
    {value: "8"},
    {value: "9"},
    {value: "+"},
    {value: "4"},
    {value: "5"},
    {value: "6"},
    {value: "-"},
    {value: "1"},
    {value: "2"},
    {value: "3"},
    {value: "/"},
    {value: "0"},
    {value: "."},
    {value: "="},
    {value: "*"},
];
class Calculator extends Component {



    render() {
        return (
            <div id="calculator">
                <div className="top">
                    <span className="clear" onClick={this.props.resetResult}>C</span>
                    <div className="screen">{this.props.result}</div>
                </div>

                <div className="keys">
                    {numbers.map(num => {
                        if (num.value === "+" || num.value === "-" || num.value === "*" || num.value === "/") {
                            return <span className="operator" key={num.value} onClick={() => this.props.addResult(num.value)}>{num.value}</span>
                        }
                        else if(num.value === "="){
                            return <span  key={num.value} onClick={this.props.considerResult} className="eval">=</span>
                        }
                        else{
                            return <span key={num.value} onClick={() => this.props.addResult(num.value)}>{num.value}</span>
                        }
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        result: state.resultReduce
    }
};
const mapDispatchToProps = dispatch =>{
    return{
        addResult: (val) => dispatch({type: "ADD", value: val}),
        resetResult: () => dispatch({type: "RESET"}),
        considerResult: () => dispatch({type: "CONSIDER"})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);