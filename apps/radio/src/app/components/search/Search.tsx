import React, { Component } from "react";

import "./Search.scss";

/* tslint:disable:no-empty-interface */
export interface SearchProps {
  
}

export class Search extends Component<SearchProps> {
  render() {
    return (
      <div className="search">
        <input className="textbox" type="text" placeholder="Search" 
          // onFocus={()=>{
          //   this.setState((prevState, props)=>({
          //     searching: true
          //   }))
          // }}
          // onChange={(e)=> {
          //   e.persist()
          //   this.setState((prevState, props)=>({
          //     searchQuery: e.target.value
          //   }))
          // }}
        />
      </div>
    );
  }
}

export default Search;
