import React, { Component } from 'react';
import logo from './logo.svg';
import './Track.css';



export const Track {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }

  renderAction() {
     if (this.props.isRemoval) {
       return (
         <a
           id={this.props.track.key}
           className="Track-action"
           onClick={this.removeTrack}
         >-</a>
       )
     }
     else {
       return (
         <a
           id={this.props.track.key}
           className="Track-action"
           onClick={this.addTrack}
         >+</a>
       )
     }
   }

   addTrack() {
     this.props.onAdd(this.props.track);
   }

   removeTrack() {
     this.props.onRemove(this.props.track);
   }


class App extends Component {
  render() {



    <div className="Track">
  <div className="Track-information">
    <h3><!-- track name will go here --></h3>
    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
  </div>
  <a className="Track-action"><!-- + or - will go here --></a>
</div>
  }
}
