import React from 'react';
import './App.css';

export default class Tooltip extends React.Component{



  constructor(props){
    super(props)
    
    let data = Array(100).fill(0).map(el => {return Math.floor(Math.random()*100)})
      this.state={
        isRender: false,
        tooltipclass: "",
        data: data,
      }

  }

   getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      left: box.left + window.pageXOffset,
      width: box.width,
      height: box.height,
    };
  }

  Wheel(e){
    var tooltip = document.getElementById("Tooltip");
    tooltip.textContent = ""
    tooltip.className = tooltip.className.replace(this.state.tooltipclass, '')
  }

  Move(e) {
    let element = e.target;
    var tooltip = document.getElementById("Tooltip");
    if(element.getAttribute("data-tooltip") && element !=tooltip){
        let coords = this.getCoords(element)
        var tooltipCoords = tooltip.getBoundingClientRect()

        let text = element.getAttribute("data-tooltip");
        tooltip.textContent = text

        let widthPage = Math.max(
          document.body.scrollWidth, document.documentElement.scrollWidth,
          document.body.offsetWidth, document.documentElement.offsetWidth,
          document.body.clientWidth, document.documentElement.clientWidth
        )
        let tooltipclass = '';

        if(coords.top - coords.height <0 ){
          tooltipclass= 'tooltiptextBottom';
          tooltip.style.left = coords.left + coords.width/2 - tooltipCoords.width/2 + "px";
          tooltip.style.top = coords.top + coords.height + tooltipCoords.height + "px";

        }else if( widthPage  - coords.left - coords.width < 0){
          tooltipclass= 'tooltiptextLeft';
          tooltip.style.left = coords.left - tooltipCoords.width -8  + "px";
          tooltip.style.top = coords.top + + coords.height/2 - tooltipCoords.height/2 + "px";

        }else if( coords.left - coords.width < 0){
          tooltipclass= 'tooltiptextRight';
          tooltip.style.left = coords.left+ coords.width + 8 + "px";
          tooltip.style.top = coords.top + coords.height/2 - tooltipCoords.height/2 + "px";
        }else{
          tooltipclass= 'tooltiptextTop';
          tooltip.style.left = coords.left + coords.width/2 - tooltipCoords.width/2 + "px";
          tooltip.style.top = coords.top -tooltipCoords.height -8 + "px";
        }
        tooltip.className = tooltip.className.replace(this.state.tooltipclass, '')
        tooltip.classList.add(tooltipclass);
        
        if(this.state.tooltipclass !== tooltipclass) this.setState({tooltipclass})
      }else{
        tooltip.className = tooltip.className.replace(this.state.tooltipclass, '');
        tooltip.textContent = ""
      }
  }

  render(){
    return (
      <div style={{width:"100%", height:"100%", background: "grey", display: "flex", justifyContent : 'space-around', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', alignContent : 'space-around'}} onWheel={(e) => this.Wheel(e)} onMouseMove={(e) => this.Move(e)}>
        <p>Привет как дела</p>
        <div id="Tooltip" className="">
        </div>
        {this.state.data.map((el, index) => {
          return(
          <div key={index} data-tooltip={"Подсказка: " + el} style={{width:"100px", height:"80px", background: "red", margin: '16px'}} >{el}</div>
          )
        })}
      </div>
    );
  }

}


