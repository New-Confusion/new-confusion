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




function fonthell(name){
       setInterval(setFontRandom(name),500);
}

        
function setFontRandom(name){

    if(Math.random()>0.85){    
    
     if (Math.random()>0.95){
     document.getElementById(name).style= "font-family: Papyrus,fantasy;"
     }
        else{
            document.getElementById(name).style= "font-family: hellvetica;";
        }
    }
    
}