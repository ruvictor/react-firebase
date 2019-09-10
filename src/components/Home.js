import React, {Component} from 'react';
import fire from '../config/Fire';
import Notes from './Notes/Notes';

class Home extends Component {

    logout = () => {
        fire.auth().signOut();
    }

    render(){
        return(
            <div>
                <Notes />
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}

export default Home;