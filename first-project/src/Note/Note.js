import React, {Component} from 'react'
import "./Note.css"
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
class Note extends Component{
    constructor(props){
        super(props)
        this.state = {
            editing: false, 
            values: [1,2,3,4,5]

        }
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
    
    }
    edit(){
        this.setState({
            editing:true
        })
    }

    remove(){
        alert("Remove your file");
    }
    save(){
        alert(this.myText.value)
    }

    renderForm(){
        return(
            <div className="note-ctn">
                <form>
                    <textarea ref={input => this.myText = input}/>
                    <button onClick={this.save}>Save</button>
                </form>
                {this.state.values}
            </div>
        )
    }
    renderDisplay(){
        return(
            <div className="note-ctn">
                <p>{this.props.children}</p>
                <button onClick={this.edit}><FaPencilAlt/></button>
                <button onClick={this.remove}><FaTrash/></button>
            </div>
        )
    }

    render(){
        if(this.state.editing){
            return this.renderForm()

        }else{
            return this.renderDisplay()
        }

    }
}
export default Note