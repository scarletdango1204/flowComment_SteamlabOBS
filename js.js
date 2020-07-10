const getColorRegex = /\[#c=.*?\]/g
const getSizeRegex = /\[#s=.*?\]/g
const getSpeedRegex = /\[#v=.*?\]/g
const getDirectionRegex = /\[#d=.*?\]/g

const setup = () => {
	const chatlog = document.querySelector('#log');
  const config = { childList: true };
  const observer = new MutationObserver(onMutation);
  observer.observe(chatlog, config);
}

const onMutation = (mutationsList) => {
  for (let mutation of mutationsList) {
    if (mutation.addedNodes.length) {
      const addedNodesArray = [...mutation.addedNodes];
      const addedDivs = addedNodesArray.filter((node) => node.nodeName === 'DIV');
      if (addedDivs.length) {
        const chatDiv = addedDivs.pop();
        const message = chatDiv.querySelector('.message');
        message.style.top = window.innerHeight*((Math.random()*100%70)/100)
        if(message.innerText.match(getColorRegex)){
           var tempColor = message.innerText.match(getColorRegex)[0] 
           var splitInnerText = message.innerText.split(tempColor)
           var newInnerText = ""
           message.style.color = 
            (tempColor.substring(tempColor.indexOf("=")+1, tempColor.length-1) == "rand" ? 
             "rgb("+255*Math.random()+","+255*Math.random()+","+255*Math.random()+")":
             tempColor.substring(tempColor.indexOf("=")+1, tempColor.length-1))
           for(i=0; i<splitInnerText.length; i++){
              newInnerText+=splitInnerText[i];
           }
           message.innerText=newInnerText
        }
        if(message.innerText.match(getSizeRegex)){
           var tempSize = message.innerText.match(getSizeRegex)[0] 
           var splitInnerText = message.innerText.split(tempSize)
           var newInnerText = ""
           message.style.fontSize = tempSize.substring(tempSize.indexOf("=")+1, tempSize.length-1) + 'px'
           for(i=0; i<splitInnerText.length; i++){
              newInnerText+=splitInnerText[i];
           }
           message.innerText=newInnerText
        }
        if(message.innerText.match(getDirectionRegex)){
           var direction = message.innerText.match(getDirectionRegex)[0] 
           var splitInnerText = message.innerText.split(direction)
           var newInnerText = ""
           for(i=0; i<splitInnerText.length; i++){
              newInnerText+=splitInnerText[i];
           }
           message.innerText=newInnerText
          //順付けではだめ
          switch(direction.substring(direction.indexOf("=")+1, direction.length-1).toUpperCase()){
            case "R":
            	message.className += " animationR";
              break;
            case "H":
            	message.className += " static";
            	break;
            default:
              message.className += " animation";
          }
        }else{
         	 message.className += " animation";
        }
      }
    }
  }
};

document.addEventListener('onLoad', setup);

document.getElementByClass("chatlist_item")
