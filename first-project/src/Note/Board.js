import React, {Component} from 'react';
import Note from './Note';

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes: [
                {
                    id:1,
                    note: "call anshu"
                },
                {
                    id:2,
                    note:"call maa"
                },
                {
                    id:3,
                    note: "call msm"
                },
                {
                    id:4,
                    note:"call dfgf"
                }
            ]
        }
        this.renderNote = this.renderNote.bind(this);
    }


    renderNote(item, i){
            return (
            <Note key={i} index={i}>{item.note}</Note>
        )
    }

    render(){
        const notes = [];

        this.state.notes.forEach(function(item, i){
            const note = (
                <Note key={i} index={item.id}>{item.note}</Note>
            );

            notes.push(note);

        })

        // const notes = this.state.notes.map(this.renderNote);
        debugger;    
        return(
            <div>
                {notes}
            </div>
        )
    }
}
export default Board