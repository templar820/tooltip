import React from 'react';
import './App.css';
import Function from "./Function"

export default class Tooltip extends React.Component{
  constructor(props){
    super(props)
    let data = Array(100).fill(0).map(el => {return Math.floor(Math.random()*100)})
      this.state={
        data: data,
      }
  }

  render(){

    return (
        <div className ="Tooltip">
        {this.state.data.map((el, index) => {
          return(
          <div key={index} data-tooltip={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, " + el} style={{width:"100px", height:"80px", background: "red", margin: '16px'}} >{el}</div>
          )
        })}
        </div>
    );
  }

}


