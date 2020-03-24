import React from 'react';
import './App.css';

export default class Tooltip extends React.Component{



  constructor(props){
    super(props)
      this.state={
        isRender: false,
        scrollX: 0,
        scrollY: 0,
      }
    }

  Move(e) {
    // console.log(e)
    // console.log(e.screenY)
    // console.log(e.clientY)
    let element = e.target;
    var tooltip = document.getElementById("Tooltip");
    if(element.getAttribute("data-tooltip")){
      let text = element.getAttribute("data-tooltip");
      tooltip.textContent = text
      tooltip.style.position = "absolute";
      // this.state.scrollX 
      console.log(this.state.scrollY)
      tooltip.style.left = e.clientX - tooltip.clientWidth/2 + "px";
      tooltip.style.top  = e.clientY + tooltip.clientHeight + "px";
    }else{
      tooltip.textContent = ""
    }
  }

  Scroll(e){
    let x = this.state.scrollX;
    x+=e.deltaX;
    console.log(e.deltaX)
    let y = this.state.scrollY;
    y+=e.deltaY;
    this.setState({scrollX:x, scrollY:y})
  }

  render(){
    return (
      <div data-tooltip = {"trusssssssssssssssse"} style={{width:"1000px", height:"1000px", background: "grey"}} onMouseMove={(e) => this.Move(e)} onWheel = {(e) => this.Scroll(e)}>
        <p>Привет как дела</p>
        <div id="Tooltip" onMouseMove={()=>{}} className="Tooltip">
          <div></div>
        </div>
      </div>
    );
  }

}


