import React, {Component} from 'react'

class Notes extends Component{
    
    deleteBtnClickHandler(id){
        this.props.deleteHandler(id);
    }
    markCompleteClickHandler(id){
        this.props.markCompleteTasks(id);
    }
    promptHandler(id){
       this.props.editHandler(id);
       
    }
   
     render() {
       let array = this.props.notesContainer.map((text,id) =>{
            return(
                <p className = 'paraStyle' key={id}>
                    
                    {text.text}
                    <button className='closeBtn' onClick={() => this.deleteBtnClickHandler(text.id)}>close</button><br/><br/>
                    <button onClick={() => this.promptHandler(text.id)}> Edit</button>
                    <button onClick={() => this.markCompleteClickHandler(text.id)}>Mark complete</button>
                </p>
            )
        }
    )
        return (
            <div>
                <h5>To Do :</h5>
                <div className='selected'>
                   {array}
                </div>
            </div>
        );
    }
}

export default Notes;
