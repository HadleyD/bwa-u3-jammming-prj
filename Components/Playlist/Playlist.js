import React, { Component } from 'react';
import logo from './logo.svg';
import './Playlist.css';

constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }



class Playlist extends Component{
  render(){
    <div className="Playlist">
  <input value="New Playlist"/>
  <!-- Add a TrackList component -->
  <a className="Playlist-save">SAVE TO SPOTIFY</a>
</div>

<TrackList
       tracks={this.props.playlistTracks}
       isRemoval={true}
       onAdd={this.props.onAdd}
       onRemove={this.props.onRemove}
     />

  }
}
export default Playlist;
