"use strict";

var SCROLLER_LENGTH = 64;
var HEIGHT = 9;
var fps = 5;

var myMessage = textToLED('аурелиано буэндиа');
var leftPointer = SCROLLER_LENGTH + 1;
var rightPointer = 0;
var furthestLeftPoint = 0 - myMessage.length;
var stage = -1;


function clearLights() {
    var lightsOn = $('.on');
    lightsOn.removeClass('on');
    lightsOn.addClass('off');
}

function setLight(row, col, state) {
    var theLight = $('.' + row + '_' + col);
    switch (state) {
        case 'off':
            if (theLight.hasClass('on')) {
                theLight.removeClass('on');
                theLight.addClass('off');
            }
            // if (theLight.hasClass('ant')){
            //     theLight.removeClass('ant');
            //     theLight.addClass('off');
            // }
            break;
        case 'on':
            if (theLight.hasClass('off')) {
                theLight.removeClass('off');
                theLight.addClass('on');
            }
            if (theLight.hasClass('ant')) {
                //theLight.removeClass('ant');
                //theLight.addClass('on');
            }
            break;
        case 'ant':
            if (theLight.hasClass('off')) {
                theLight.removeClass('off');
                theLight.addClass('ant');
            }
            if (theLight.hasClass('on')) {
                theLight.removeClass('on');
                theLight.addClass('ant');
            }
            break;
        case 'antoff':
            if (theLight.hasClass('ant')) {
                theLight.removeClass('ant');
                theLight.addClass('off');
            }
            break;
        default:
            break;
    }
}

function drawMessage(messageArray, leftPointer) {
    var messageLength = messageArray.length;

    var even = Math.abs(leftPointer % 2);
    var curState = Math.abs(leftPointer % 5);
    if (even) {
        for (var col = 0; col < messageLength; col++) {
            for (var row = 0; row < HEIGHT; row++) {
                if (row <= stage || row >= HEIGHT - 1 - stage) {
                    var offset = col % stage;
                    if (col % 5 !== curState  && col % 5 !== curState - 1) {
                        setLight(row, col, 'ant');
                    } else {
                        setLight(row, col, 'antoff');
                    }
                }
                if (col <= stage || col >= SCROLLER_LENGTH - 1 - stage) {
                    offset = row % stage;
                    if (row % 5 !== curState  && row % 5 !== curState - 1 ) {
                        setLight(row, col, 'ant');
                    } else {
                        setLight(row, col, 'antoff');
                    }
                }
            }
        }
    }

    if (messageLength > 0) {
        for (var col = 0; col < messageLength; col++) {
            for (var row = 0; row < HEIGHT; row++) {
                var offsetCol = leftPointer + col;
                if (offsetCol < SCROLLER_LENGTH || offsetCol >= 0) {
                    var item = messageArray[col][row];
                    var state = item ? 'on' : 'off';
                    setLight(row, offsetCol, state);
                }
            }
        }
    }
}

function textToLED(theWord) {
    var theMessage = [];
    theWord = theWord.toUpperCase();
    for (var i = 0; i < theWord.length; i++) {
        theMessage.push(charToLED(theWord.charAt(i)));
        theMessage.push(charToLED());
    }

    var flatten = [];
    flatten = flatten.concat.apply(flatten, theMessage);

    return flatten;
}

function charToLED(theChar) {
    var theLed = [];
    switch (theChar) {
        case 'A' :
            theLed = [
                [0, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 1, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 0, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1]];
            break;
        case 'B' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 0, 1, 1, 0, 1, 1, 0]];
            break;
        case 'C' :
            theLed = [[0, 0, 1, 1, 1, 1, 1, 0],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 0, 0, 0, 1, 0]];
            break;
        case 'D' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 1, 1, 1, 1, 0]];
            break;
        case 'E' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1]];
            break;
        case 'F' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0]];
            break;
        case 'G' :
            theLed = [[0, 0, 1, 1, 1, 1, 1, 0],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 1, 0, 1],
                [0, 1, 1, 0, 0, 1, 1, 1]];
            break;
        case 'H' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 1]];
            break;
        case 'I' :
            theLed = [[0, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 0]];
            break;
        case 'J' :
            theLed = [[0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 1, 1, 1, 1, 1, 0],
                [0, 1, 0, 0, 0, 0, 0, 0]];
            break;
        case 'K' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 1, 0, 1, 0, 0],
                [0, 0, 1, 0, 0, 0, 1, 0],
                [0, 1, 0, 0, 0, 0, 0, 1]];
            break;
        case 'L' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 1]];
            break;
        case 'M' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 1]];
            break;
        case 'N' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 1]];
            break;
        case 'O' :
            theLed = [[0, 0, 1, 1, 1, 1, 1, 0],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 1, 1, 1, 1, 0]];
            break;
        case 'P' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0, 0]];
            break;
        case 'Q' :
            theLed = [[0, 0, 1, 1, 1, 1, 1, 0],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 1, 0, 1],
                [0, 1, 0, 0, 0, 0, 1, 0],
                [0, 0, 1, 1, 1, 1, 0, 1]];
            break;
        case 'R' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 1, 1, 1]];
            break;
        case 'S' :
            theLed = [
                [0, 0, 1, 1, 0, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 0, 1, 1, 0]];
            break;
        case 'T' :
            theLed = [[0, 1, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0]];
            break;
        case 'U' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 1, 1, 1, 1, 1, 1, 0]];
            break;
        case 'V' :
            theLed = [[0, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 1, 0],
                [0, 1, 1, 1, 1, 1, 0, 0]];
            break;
        case 'W' :
            theLed = [[0, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 1, 1, 1, 1, 1, 1, 0]];
            break;
        case 'X' :
            theLed = [[0, 1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 1, 0, 1, 1, 0],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 1, 1, 0],
                [0, 1, 0, 0, 0, 0, 0, 1]];
            break;
        case 'Y' :
            theLed = [[0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 1, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0]];
            break;
        case 'Z' :
            theLed = [[0, 1, 0, 0, 0, 0, 1, 1],
                [0, 1, 0, 0, 0, 1, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 1, 0, 0, 0, 1],
                [0, 1, 1, 0, 0, 0, 0, 1]];
            break;
        case ' ':
            theLed = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ];
            break;
        case 'А' :
            theLed = [
                [0, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 1, 0, 1, 1, 0, 0],
                [0, 1, 0, 0, 1, 1, 0, 0],
                [0, 0, 1, 0, 1, 1, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1]];
            break;
        case 'У':
            theLed = [
                [0, 1, 1, 1, 1, 0, 1, 0],
                [0, 0, 0, 0, 1, 1, 0, 1],
                [0, 0, 0, 0, 1, 1, 0, 1],
                [0, 0, 0, 0, 1, 1, 0, 1],
                [0, 1, 1, 1, 1, 1, 1, 0]
            ];
            break;
        case 'Р' :
            theLed = [
                [0, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 1, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 1, 0, 0, 0, 0]];
            break;
        case 'Е':
            theLed = [
                [0, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1]
            ];
            break;
        case 'Л':
            theLed = [
                [0, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 1, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 1, 1]];
            break;
        case 'И':
            theLed = [
                [0, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 1]];
            break;
        case 'Н' :
            theLed = [
                [0, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0, 0],
                [0, 1, 1, 1, 1, 1, 1, 1]];
            break;
        case 'О' :
            theLed = [
                [0, 0, 1, 1, 1, 1, 1, 0],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 0, 1, 1, 1, 1, 1, 0]];
            break;
        case 'Б' :
            theLed = [
                [0, 1, 1, 1, 1, 1, 1, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 0, 1, 1, 0]];
            break;
        case 'Э':
            theLed = [
                [0, 1, 0, 0, 0, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 1, 0, 0, 1, 0, 0, 1],
                [0, 0, 1, 1, 1, 1, 1, 0]
            ];
            break;
        case 'Д':
            theLed = [
                [0, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 1, 0, 0, 0, 1, 0],
                [0, 1, 0, 0, 0, 0, 1, 0],
                [0, 0, 1, 0, 0, 0, 1, 0],
                [0, 0, 0, 1, 1, 1, 1, 1]
            ];
            break;
        default:
            theLed = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
    }
    return theLed;
}


function draw() {
    setTimeout(function () {
        requestAnimationFrame(draw);

        if (leftPointer === furthestLeftPoint) {
            leftPointer = SCROLLER_LENGTH + 1;
            stage += 1;
            if (stage % 4 === 0) {
                stage = 0;
            }
        }

        drawMessage(myMessage, leftPointer);
        leftPointer--;

    }, 1000 / fps);
}

draw();