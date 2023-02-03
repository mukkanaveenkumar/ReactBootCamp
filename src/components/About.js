import Profile from "./ProfileFC";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import React from "react";
import { Component } from "react";
import ProfileFC from "./ProfileFC";

class About extends Component{
  constructor(props)
  {
    super(props);
    console.log("Parent constructor");    
  }

     componentDidMount(){
    console.log("Parent componentDidMount");    
}

  render(){
    console.log("Parent render");
    return (
      <div>
        <p>This is About us Page</p>
        <h1> This is to understand react routing</h1>
       <ProfileFC></ProfileFC>     
      </div>
    );

  }

}

export default About;