import React, {Component} from 'react'
import "./calculator.css";

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
    },
    {
        name:'.',
        op:"."
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
        try{
            const value = this.state.calciScreen;
            const ansValue = eval(value);
            this.setState({calciScreen :ansValue,
                        answerShown:true}) 
            }
        catch(err){
                console.log(err);
                alert("Complete the query")
        }
    }

    clear(){
        this.setState({calciScreen:'',
                        ans:''});
        

    }

    render(){
        const buttonHandler = numArray.map((num) =>{
            return(
                <button className='btns' onClick={() => this.clickHandler(num.toString(),"number")}>{num}</button>
                )
            }
        )
        const operator = operatorArray.map((op) =>{
            return(
                <button className='opBtns' onClick={() => this.operatorHandler(op.op)}>{op.name}</button>
            )
        })
        return(
            <div className="container border">
                <div className='first-half'>
                    <h1>Calculator</h1>
                    <input readonly placeholder="0" value = {this.state.calciScreen}/><br/>
                </div> 
                <div className='second-half'>
                    {buttonHandler}
                    <button className='btns' onClick={() => this.answer()}>=</button>
                    <button className='btns' onClick={() => this.clear()}>Clear</button>
                </div>   
                <div className='operator-style'>
                    {operator}
                </div>
                <div style={{clear: 'both'}}></div>
            </div>
        );

    }
}
export default Calculator