import React, {Component} from 'react';
import fire from '../../../config/Fire';

class AddNewNote extends Component {

    constructor(props){
        super(props);
        this.state = {
            newNoteContent: ''
        }
    }

    handleUserInput = (e) => {
        this.setState({
            newNoteContent: e.target.value
        });
    }

    addNote = () => {
        // check if our new note is empty or not
        if(this.state.newNoteContent.trim()){
            this.props.addNote(this.state.newNoteContent);
            this.setState({
                newNoteContent: ''
            });
        }
    }

    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="addNoteField">
                <input type="text" 
                    className="NoteField"
                    onChange={this.handleUserInput}
                    value={this.state.newNoteContent}
                    placeholder="Write a new note..." />
                <button 
                    className="addNoteBtn"
                    onClick={this.addNote}>Add Note</button>
                <button className="logOutBtn" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default AddNewNote;