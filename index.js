// function takeANumber(deliLine, name){
//   deliLine.push(name);
//   return "Welcome, " + name + ". You are number " + (deliLine.length) + " in line."; 
// }
var line = [];
takeANumber(line) -> 1 
takeANumber(line) -> 2 
nowServing(line) -> 1 
nowServing(line) -> 2 
takeANumber(line) -> 3 
 var num = 0;
function takeANumber(line){
  num++;
  line.push(num);
  return num;
}

function nowServing(deliLine){
  if (deliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  return "Currently serving " + deliLine.shift(1) + ".";
}

function currentLine(deliLine){
  if (deliLine.length === 0){
    return "The line is currently empty."
  }
  var line= [];
  for (var i = 0; i < deliLine.length; i ++){
    line.push(" " + (i+1) + ". " + deliLine[i]) 
  }
  return "The line is currently:" + line
}