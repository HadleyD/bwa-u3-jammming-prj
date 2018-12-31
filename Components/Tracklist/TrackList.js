import React, { Component } from 'react';
import logo from './logo.svg';
import './TrackList.css';
import 'Track';S


export const TrackList {
  mapTracks() {
    trackArray = Array.from(this.props.tracks);
    console.log("TrackList trackArray: " + trackArray);
    return (trackArray.map(track => {
      return (
        <Track
          track={track}
          key={track.id}
          onAdd={this.props.onAdd}
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}
        />
      );

class TrackList extends Component{
render(){
  <div className="TrackList">
    <!-- You will add a map method that renders a set of Track components  -->
</div>
}

}

      
