import React, {Component} from 'react'

class CompletedNotes extends Component{
    completeDeleteClickHandler(id){
        this.props.completeDeleteHandler(id);
    }
    render(){
        let completedArray = this.props.completeNotesContainer.map((text,idtype) =>{
            return(
                <p className = 'paraStyle' key={idtype}>
                    
                    {text.text}
                    <button className='closeBtn' onClick={() => this.completeDeleteClickHandler(text.id)}>close</button><br/><br/>
                    
                </p>
            )
        }
    )
        return(
            <div>
               <h5>Completed Tasks :</h5>
               <div className='selected float-right'>
                   {completedArray}
                </div>
            </div>
        );
    }
}
export default CompletedNotes