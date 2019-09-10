import React, {Component} from 'react';
import Note from './Note/Note';

class Notes extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes: [
                {id: 1, content: 'The first Note'},
                {id: 2, content: 'The second Note'}
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
            <div>
                {
                    this.state.notes.map((note) => {
                        return (
                            <Note content = {note.content} 
                                id = {note.id} 
                                key = {note.id} />
                        )
                    })
                }
            </div>
        );
    }
}

export default Notes;