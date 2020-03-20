import React from 'react';
import './App.css';

export default class Tooltip extends React.Component{



  constructor(props){
    super(props)
      this.state={
        isRender: false,
      }
    }

  Move(e) {
    let element = e.target;
    var tooltip = document.getElementById("Tooltip");
    if(element.getAttribute("data-tooltip")){
      let text = element.getAttribute("data-tooltip");
      tooltip.textContent = text
      
      console.log(tooltip.clientWidth)
      tooltip.style.position = "absolute";
      tooltip.style.left = e.clientX - tooltip.clientWidth/2 + "px";
      tooltip.style.top = e.clientY+ tooltip.clientHeight + "px";
    }else{
      tooltip.textContent = ""
    }
  }

  render(){
    return (
      <div data-tooltip = {"trusssssssssssssssse"} style={{width:"1000px", height:"1000px", background: "grey"}} onMouseMove={(e) => this.Move(e)}>
        <p>Привет как дела</p>
        <div id="Tooltip" className="Tooltip">
          <div></div>
        </div>
      </div>
    );
  }

}


