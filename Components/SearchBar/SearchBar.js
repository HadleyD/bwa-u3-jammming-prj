import React, { Component } from 'react';



search() {
  this.props.onSearch(this.state.term);
}



class SearchBar extends Component {
  super(props);
      this.state = { term: '' };
      this.search = this.search.bind(this);
      this.handleTermChange = this.handleTermChange.bind(this);
    }


render(){
  <div class="SearchBar">
  <input className="Enter A Song, Album, or Artist" />
  onChange={this.handleTermChange}
       />
       <a onClick={this.search}>SEARCH</a>
       </div>
}

export SearchBar;
