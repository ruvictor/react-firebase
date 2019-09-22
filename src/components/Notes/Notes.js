import React, {Component} from 'react';
import Note from './Note/Note';
import AddNewNote from './AddNewNote/AddNewNote';
import './Notes.css';
import fire from '../../config/Fire';

class Notes extends Component {

    constructor(props){
        super(props);
        this.state = {
            notes: [],
            loading: true
        }
    }

    AddNewNote = (note) => {
        const BackUpState = this.state.notes;
        BackUpState.push({id: BackUpState.length + 1, content: note});
        fire.database().ref('Notes/').push({
            id: this.state.notes.length + 1,
            note: note
        }).then((data)=>{
            //success callback
            this.setState({
                notes: BackUpState
            })
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })
    }

    componentWillMount(){
        const BackUpState = this.state.notes;
        fire.database().ref('Notes/').once('value', function
        (snapshot) {
            // console.log(snapshot.val().key)
            snapshot.forEach(function(childSnapshot){
                // console.log(childSnapshot.val().id)
                BackUpState.push({id: BackUpState.length + 1, content: childSnapshot.val().note});
            })
        });
        this.setState({
            notes: BackUpState
        })
        console.log(this.state);
    }

    componentDidMount(){
        setTimeout(function() {
          this.setState({
            loading: false
          });
        }.bind(this), 2000);
      }

    render(){
        // if (this.state.loading){
        //     const loading = <p>Loading...</p>;
        // }
        return (
            <div className="notesApp">
                <h2>My Notes</h2>
                {
                    this.state.loading ? <p>Loading...</p> : 
                    this.state.notes.map((note) => {
                        return (
                            <Note content = {note.content} 
                                id = {note.id} 
                                key = {note.id} />
                        )
                    })
                }
                <AddNewNote addNote={this.AddNewNote} />
            </div>
        );
    }
}

export default Notes;