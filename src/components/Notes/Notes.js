import React, {Component} from 'react';
import Note from './Note/Note';
import AddNewNote from './AddNewNote/AddNewNote';
import './Notes.css';

class Notes extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes: [
                {id: 1, content: 'My first Note'}
            ]
        }
    }

    addNewNote = (note) => {
        const BackUpState = this.state.notes;
        BackUpState.push({id: BackUpState.length + 1, content: note});
        this.setState({
            notes: BackUpState
        });
    }

    render(){
        return (
            <div className="notesApp">
                <h2>My Notes</h2>
                {
                    this.state.notes.map((note) => {
                        return (
                            <Note content = {note.content} 
                                id = {note.id} 
                                key = {note.id} />
                        )
                    })
                }
                <AddNewNote addNote={this.addNewNote} />
            </div>
        );
    }
}

export default Notes;