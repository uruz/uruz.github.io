var SCROLLER_LENGTH = 60;
var HEIGHT = 7;
var theInput = $('#theInput');
var fps = 30;

var myMessage = textToLED('Hello everyone ');
var leftPointer = SCROLLER_LENGTH + 1;
var rightPointer = 0;
var furthestLeftPoint = 0 - myMessage.length;

theInput.change(function(){
  clearLights();
  myMessage = textToLED(this.value);
  furthestLeftPoint = 0 - myMessage.length;
  leftPointer = SCROLLER_LENGTH + 1;
});

function clearLights(){
  var lightsOn = $('.on');
  lightsOn.removeClass('on');
  lightsOn.addClass('off');
}
function setLight(row, col, state){
  var theLight = $('.'+row+'_'+col);
  
  if(theLight.hasClass('on') && !state){
    theLight.removeClass('on');
    theLight.addClass('off');
  }else if(theLight.hasClass('off') && state){
    theLight.removeClass('off');
    theLight.addClass('on');
  }
}

function drawMessage(messageArray, leftPointer){
  var messageLength = messageArray.length;
  var totalScrollLength = SCROLLER_LENGTH + messageLength;
  
  if(messageLength>0){
    
		for(var col=0;col<messageLength;col++){
      for(var row=0;row<HEIGHT;row++){
        var offsetCol = leftPointer + col;
        
        if(offsetCol<SCROLLER_LENGTH || offsetCol >= 0){
          setLight(row,offsetCol,messageArray[col][row]);
        }
        
      }
    }
    
  }
}

function textToLED(theWord){
  var theMessage = [];
  theWord = theWord.toUpperCase();
  for(var i=0;i<theWord.length;i++){
    theMessage.push(charToLED(theWord.charAt(i)));
    theMessage.push(charToLED());
  }
  
  var flatten = [];
  flatten = flatten.concat.apply(flatten, theMessage);
  
  return flatten;
}

function charToLED(theChar){
  var theLed = [];
	switch(theChar){
    case 'A' :
      theLed = [[0, 0, 1, 1, 1, 1, 1], 
                [0, 1, 0, 0, 1, 0, 0], 
                [1, 0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 1, 0, 0],
                [0, 0, 1, 1, 1, 1, 1]];
      break;
    case 'B' :
      theLed = [[1, 1, 1, 1, 1, 1, 1], 
                [1, 0, 0, 1, 0, 0, 1],
                [1, 0, 0, 1, 0, 0, 1],
                [1, 0, 0, 1, 0, 0, 1],
                [0, 1, 1, 0, 1, 1, 0]];
      break;
		case 'C' :
      theLed = [[0, 1, 1, 1, 1, 1, 0], 
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 1, 0]]; 
      break;
     case 'D' :
      theLed = [[1, 1, 1, 1, 1, 1, 1], 
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 1, 1, 1, 1, 1, 0]]; 
      break;
    case 'E' :
      theLed = [[1, 1, 1, 1, 1, 1, 1], 
                [1, 0, 0, 1, 0, 0, 1],
                [1, 0, 0, 1, 0, 0, 1],
                [1, 0, 0, 1, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1]];
      break;
    case 'F' :
      theLed = [[1, 1, 1, 1, 1, 1, 1], 
                [1, 0, 0, 1, 0, 0, 0],
                [1, 0, 0, 1, 0, 0, 0],
                [1, 0, 0, 1, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0]];
      break;
    case 'G' :
      theLed = [[0, 1, 1, 1, 1, 1, 0], 
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 1, 0, 1],
                [1, 1, 0, 0, 1, 1, 1]];
      break;
    case 'H' :
      theLed = [[1, 1, 1, 1, 1, 1, 1], 
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1]];
      break;
    case 'I' :
      theLed = [[0, 0, 0, 0, 0, 0, 0], 
                [1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0]];
      break;
    case 'J' :
      theLed = [[0, 0, 0, 0, 0, 1, 0], 
                [0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0],
                [1, 0, 0, 0, 0, 0, 0]];
      break;  
 	 case 'K' :
      theLed = [[1, 1, 1, 1, 1, 1, 1], 
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 0, 1, 0, 0],
                [0, 1, 0, 0, 0, 1, 0],
                [1, 0, 0, 0, 0, 0, 1]];
      break;
 	 case 'L' :
      theLed = [[1, 1, 1, 1, 1, 1, 1], 
                [0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 1]];
      break;
 	 case 'M' :
      theLed = [[1, 1, 1, 1, 1, 1, 1], 
                [0, 1, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1]];
      break;
 	 case 'N' :
      theLed = [[1, 1, 1, 1, 1, 1, 1], 
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0],
                [1, 1, 1, 1, 1, 1, 1]];
      break;
 	 case 'O' :
      theLed = [[0, 1, 1, 1, 1, 1, 0], 
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 1],
                [0, 1, 1, 1, 1, 1, 0]];
      break;
 	 case 'P' :
      theLed = [[1, 1, 1, 1, 1, 1, 1], 
                [1, 0, 0, 1, 0, 0, 0],
                [1, 0, 0, 1, 0, 0, 0],
                [1, 0, 0, 1, 0, 0, 0],
                [0, 1, 1, 0, 0, 0, 0]];
      break;
 	 case 'Q' :
      theLed = [[0, 1, 1, 1, 1, 1, 0], 
                [1, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0, 1, 0],
                [0, 1, 1, 1, 1, 0, 1]];
      break;
 	 case 'R' :
      theLed = [[1, 1, 1, 1, 1, 1, 1], 
                [1, 0, 0, 1, 0, 0, 0],
                [1, 0, 0, 1, 0, 0, 0],
                [1, 0, 0, 1, 0, 0, 0],
                [0, 1, 1, 0, 1, 1, 1]];
      break;
 	 case 'S' :
      theLed = [[0, 1, 1, 0, 0, 0, 1], 
                [1, 0, 0, 1, 0, 0, 1],
                [1, 0, 0, 1, 0, 0, 1],
                [1, 0, 0, 1, 0, 0, 1],
                [1, 0, 0, 0, 1, 1, 0]];
      break;
 	 case 'T' :
      theLed = [[1, 0, 0, 0, 0, 0, 0], 
                [1, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0]];
      break;
 	 case 'U' :
      theLed = [[1, 1, 1, 1, 1, 1, 0], 
                [0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0]];
      break;
 	 case 'V' :
      theLed = [[1, 1, 1, 1, 1, 0, 0], 
                [0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 1, 0],
                [1, 1, 1, 1, 1, 0, 0]];
      break;
 	 case 'W' :
      theLed = [[1, 1, 1, 1, 1, 1, 0], 
                [0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 0]];
      break;
 	 case 'X' :
      theLed = [[1, 0, 0, 0, 0, 0, 1], 
                [0, 1, 1, 0, 1, 1, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [0, 1, 1, 0, 1, 1, 0],
                [1, 0, 0, 0, 0, 0, 1]];
      break;
 	 case 'Y' :
      theLed = [[1, 0, 0, 0, 0, 0, 0], 
                [0, 1, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0]];
      break;
 	 case 'Z' :
      theLed = [[1, 0, 0, 0, 0, 1, 1], 
                [1, 0, 0, 0, 1, 0, 1],
                [1, 0, 0, 1, 0, 0, 1],
                [1, 0, 1, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 1]];
      break;
    default:
      theLed = [[0, 0, 0, 0, 0, 0, 0]];
  }  
  return theLed;
}


function draw() {
	setTimeout(function() {
		requestAnimationFrame(draw);
    
    	 if(leftPointer==furthestLeftPoint){
        	leftPointer = SCROLLER_LENGTH + 1;
       }
    
       drawMessage(myMessage, leftPointer);
       leftPointer--;     
			
	}, 1000 / fps);
}

draw();