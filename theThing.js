function changeFrame(name, url){
    document.getElementById(name).src = url;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var frameChanger = getUrlParam('frame', "home");


changeFrame("confusionFrame", "./" + frameChanger +".html");

function fonthell(){
   
        setInterval(setFontRandom,250);
        
}
function setFontRandom(){
    if(Math.random()>0.95){
    document.getElementById("content").parentElement.style.fontFamily= "hellvetica";
    }
    else{
      document.getElementById("content").parentElement.style.fontFamily= "roboto";  
    }
}