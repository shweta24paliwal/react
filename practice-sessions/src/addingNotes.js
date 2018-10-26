import React, {Component} from 'react'
import "./index.css";
let idValue = 1;
class AddNote extends Component{
    constructor(props){
        super(props);
        this.state = {
           text: ""
        };
    }

    inputChange(event){
        this.setState({
            text: event.target.value,
        });
    }

    addBtnClickHandler(){
        const note = {
            text: this.state.text,
            id: idValue
        };
        
        this.props.newNoteAddHandler(note);   
        idValue = idValue + 1;
        this.setState({text:''}) 
       
    }
    render(){
        return(
            <div>
                <textarea className='text' onChange={(e) => this.inputChange(e)} value={this.state.text}></textarea><br/>
                <button onClick={() => this.addBtnClickHandler()}>Add</button>
            </div>
        )
    }
}
export default AddNote;