sliderinterval=setInterval(changeDiv,5000);

var sliderDivs=["thrdone","thrdtwo","thrdthree"];
var sldDivIndex = 0;
var prevDivId=sliderDivs[sldDivIndex];
var currentDivId=null;


function changeDiv(){
  prevDivId=sliderDivs[sldDivIndex];
  console.log("prevDivId is :"+prevDivId);
  sldDivIndex++;
  if (sldDivIndex>=sliderDivs.length){
    sldDivIndex=0;
  }
  currentDivId=sliderDivs[sldDivIndex];
  console.log("currentDivId is :" + currentDivId)
  document.getElementById(prevDivId).style.maxWidth="0px";
  document.getElementById(prevDivId).style.transform="translateX(1500px)";
  document.getElementById(currentDivId).style.maxWidth="100%";
  document.getElementById(currentDivId).style.transform="translateX(0)";
}

function selectDiv(ele) {
  clearInterval(sliderinterval);
  if (ele.id=="tbt1") {
    prevDivId=sliderDivs[sldDivIndex];
    document.getElementById(prevDivId).style.maxWidth="0";
    document.getElementById(prevDivId).style.transform="translateX(1500px)";  
    console.log("prevDivId is now " + prevDivId);
    if (sldDivIndex==0){
        sldDivIndex=sliderDivs.length-1;
    }
    else {
        sldDivIndex--;
    }
    if (sldDivIndex<1) {
        sldDivIndex=0;
    }
    currentDivId=sliderDivs[sldDivIndex];
    document.getElementById(currentDivId).style.maxWidth="100%";
    document.getElementById(currentDivId).style.transform="translateX(0px)";
    prevDivId=sliderDivs[sldDivIndex];
    console.log("currentDivId is now " + currentDivId);
}

  if (ele.id=="tbt2") {
    prevDivId=sliderDivs[sldDivIndex];
    document.getElementById(prevDivId).style.maxWidth="0px";
    document.getElementById(prevDivId).style.transform="translateX(1500px)";
    sldDivIndex++;
    if (sldDivIndex>=sliderDivs.length){
        sldDivIndex=0;
    }
    currentDivId=sliderDivs[sldDivIndex];
    document.getElementById(currentDivId).style.maxWidth="100%";
    document.getElementById(currentDivId).style.transform="translateX(0px)";  
    console.log("prevDiv is now " + prevDivId);
    console.log("currentDiv is now " + currentDivId);
}
  
  sliderinterval=setInterval(changeDiv,5000);
}