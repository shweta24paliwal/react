import React, {Component} from 'react'
import "./index.css";

const numArray = [1,2,3,4,5,6,7,8,9,0];
const operatorArray = [
    {
        name:'x',
        op:'*'
    },
    {
        name:'+',
        op:'+'
    },
    {
        name:'-',
        op:'-'
    },
    {
        name:'/',
        op:'/'
    },
    {
        name:'%',
        op:'%'
    }
]


class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            calciScreen : '',
            inputValue : false,
            ans: '',
            operator: '',
            answerShown: false
            
        }
    }
    clickHandler(num, type){
        const newState = {inputValue:true};

        if (this.state.answerShown){
            newState.calciScreen = num;
            newState.answerShown = false;
        } else {
            newState.calciScreen = this.state.calciScreen + num;
        }
        
        this.setState(newState);
               
    }

    operatorHandler(op){
        if(this.state.inputValue){
            this.setState({
                calciScreen:this.state.calciScreen + op,
                inputValue:false,
                operator: op
            });
        }
    }

    answer(){
            debugger;
        const value = this.state.calciScreen;
        const ansValue = eval(value);
        this.setState({calciScreen :ansValue,
                        answerShown:true}) 
       
            // }
            // catch(err){
            //     console.log(err);
            //     alert("Complete the query")
}

    clear(){
        this.setState({calciScreen:'',
                        ans:''});
        

    }

    render(){
        const buttonHandler = numArray.map((num) =>{
            return(
                <button onClick={() => this.clickHandler(num.toString(),"number")}>{num}</button>
                )
            }
        )
        const operator = operatorArray.map((op) =>{
            return(
                <button onClick={() => this.operatorHandler(op.op)}>{op.name}</button>
            )
        })
        return(
            <div>
                <h1>Calculator</h1>
                <input  value = {this.state.calciScreen}/><br/>
              
               
               
                {buttonHandler}
                <div>
                    {operator}
                    <button onClick={() => this.answer()}>=</button>
                    <button onClick={() => this.clear()}>Clear</button>
                </div>
            </div>
        );

    }
}
export default Calculator