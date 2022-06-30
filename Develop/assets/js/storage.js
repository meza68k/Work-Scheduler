
//local storage functions this one sets the key and turns into string value
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};
//this one grabs the json out of local storage and brings string value 
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};

//function that pastes the sauce from the local storage
var pasteSauce = function(inputId, tBId){ 
    var description = localStorage.getObj(inputId)
    var textBox = document.getElementById(inputId)
    textBox.value = description
};
//function for grabbing the input and storing into local storage
var copyPasteStore = function(inputId,tBId ){
    var event = document.getElementById(inputId).value;
    localStorage.setObj(inputId, event);
    pasteSauce(inputId)
};
var clearBox = function(inputId){
    var emptyStr = "";
    localStorage.setObj(inputId, emptyStr);
    pasteSauce(inputId);
};
//pastes the sauce on load
pasteSauce("9am");
pasteSauce("10am");
pasteSauce("11am");
pasteSauce("12pm");
pasteSauce("1pm");
pasteSauce("2pm");
pasteSauce("3pm");
pasteSauce("4pm");
pasteSauce("5pm");
