import React, {Component} from 'react'
import AddNote from "./addingNotes.js";
import Notes from "./Notes.js";
import CompletedNotes from './CompletedNotes.js';

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
           notes: [] ,
           completeNotes: []    
        };
        this.newNoteAddHandler = this.newNoteAddHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.markCompleteTasks = this.markCompleteTasks.bind(this);
        this.completeDeleteHandler = this.completeDeleteHandler.bind(this);
    }

    newNoteAddHandler(note) {
      const allNotes = [note, ...this.state.notes];
      this.setState({notes:allNotes})
    }

    deleteHandler(id){
        const filteredNotes = this.state.notes.filter((note) =>{
            return note.id !== id;
            } 
        );
        this.setState({notes:filteredNotes})
        console.log(this.state.notes);  
    }

    completeDeleteHandler(id){
        const filteredNotes = this.state.completeNotes.filter((note) =>{
            return note.id !== id;
            } 
        );
        this.setState({completeNotes:filteredNotes})
         
    }
    markCompleteTasks(id){
        const markComplete = this.state.notes.find((obj) =>{
            return obj.id === id;
        });
        const arrayObj = [markComplete,...this.state.completeNotes]
        this.setState({completeNotes:arrayObj});
        const filtered = this.state.notes.filter((note) =>{
            return note.id !== id;
            } 
        );
        this.setState({notes:filtered})
        console.log(this.state.notes)
    }

    render() {
        console.log('Notes', this.state.notes);
        return (
            <div>
                <h3>Notes Application</h3> 
                <AddNote newNoteAddHandler={this.newNoteAddHandler} />
                <Notes notesContainer={this.state.notes}
                        deleteHandler={this.deleteHandler}
                        markCompleteTasks={this.markCompleteTasks}/>
                <CompletedNotes completeNotesContainer = {this.state.completeNotes}
                        completeDeleteHandler={this.completeDeleteHandler}/>
                      
                
            </div>    
        );
    }
}

export default ToDo;