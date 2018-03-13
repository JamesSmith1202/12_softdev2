var svg = document.getElementById("svg");
var swapButton = document.getElementById("swap");
var titleText = document.getElementById("title");
var swap_text = document.getElementById("swap_country");
var bronze;
var silver;
var gold;
var country1 = [188, 162, 196, "Russia"];
var country2 = [176, 195, 237, "China"];
var countries = [country1, country2];
var index = 0;

var addCircle = function(color, x, y, size) {
  var circ = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circ.setAttribute("cx",x);
  circ.setAttribute("cy",y);
  circ.setAttribute("r",size);
  circ.setAttribute("fill",color);
  circ.setAttribute("stroke","black");
  svg.appendChild(circ);
  return circ;
};

var swapText = function(){
  titleText.innerHTML = countries[index][3] + "'s Medals:";
  swap_text.innerHTML = "Swap to " + countries[index == 0 ? 1 : 0][3] + "'s medals";
}

var swap = function(){
  if(index){
    index = 0;
  }
  else{
    index = 1;
  }
  swapText();
  bronze.setAttribute("r",countries[index][0]/5);
  silver.setAttribute("r",countries[index][1]/5);
  gold.setAttribute("r",countries[index][2]/5);
}

var setup = function(){
  var width = svg.getBoundingClientRect().width;
  var height = svg.getBoundingClientRect().height;
  swapText();
  bronze = addCircle("brown", 2*width/6, height/2, countries[index][0]/5);
  silver = addCircle("grey", 3*width/6, height/2, countries[index][1]/5);
  gold = addCircle("yellow", 4*width/6, height/2, countries[index][2]/5);
}

setup();
swapButton.addEventListener("click", swap);
