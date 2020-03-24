export default (function(){

    let getCoords = (elem) => {
        let box = elem.getBoundingClientRect();
      
        return {
          top: box.top + window.pageYOffset,
          left: box.left + window.pageXOffset,
          width: box.width,
          height: box.height,
        };
      }

    let Move = (e) => {
        let element = e.target;
        var tooltip = document.getElementById("Tooltip");
        if(element.getAttribute("data-tooltip") && element != tooltip){
            tooltip.style.display = 'block'
            let text = element.getAttribute("data-tooltip");
            tooltip.textContent = text
    
            let coords = getCoords(element)
            var tooltipCoords = tooltip.getBoundingClientRect()
    
            let widthPage = Math.max(
              document.body.scrollWidth, document.documentElement.scrollWidth,
              document.body.offsetWidth, document.documentElement.offsetWidth,
              document.body.clientWidth, document.documentElement.clientWidth
            )
    
    
            if(widthPage  - coords.left - coords.width - tooltipCoords.width/2 < 0){
              //Показать слева
              tooltip.style.left = coords.left - tooltipCoords.width -8  + "px";
              tooltip.style.top = coords.top + + coords.height/2 - tooltipCoords.height/2 + "px";
    
            }else if(coords.top - coords.height <0  ){
              //Показать снизу
              tooltip.style.left = coords.left + coords.width/2 - tooltipCoords.width/2 + "px";
              tooltip.style.top = coords.top + coords.height + tooltipCoords.height + "px";
            }else if( coords.left - coords.width < 0){
              //Показать справа
              tooltip.style.left = coords.left+ coords.width + 8 + "px";
              tooltip.style.top = coords.top + coords.height/2 - tooltipCoords.height/2 + "px";
            }else{
              //Показать сверху
              tooltip.style.left = coords.left + coords.width/2 - tooltipCoords.width/2 + "px";
              tooltip.style.top = coords.top -tooltipCoords.height -8 + "px";
            }      
          }else{
            tooltip.style.display = 'none';
          }
      }
    let body = document.getElementsByTagName("body")[0]
    body.addEventListener("mousemove", (e) => Move(e))
    let tooltip = document.createElement("div")
    tooltip.setAttribute("id","Tooltip");
    
    let style = {
        transition: 'display 0.2s ease-out',
        borderRadius: '8px',
        padding: '8px 21px',
        fontSize: '14px',
        lineHeight: '14px',
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        display: 'none',
        justifyContent: 'center',
        position: 'absolute',
        wordWrap: 'break-word',
        maxWidth: '300px',
    }
    for(let el in style){
        tooltip.style[el] = style[el]
    }
    body.appendChild(tooltip)
})()