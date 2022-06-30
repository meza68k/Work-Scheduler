Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};
var pasteSauce = function(inputId, tBId){ 
    var description = localStorage.getObj(inputId)
    var textBox = document.getElementById(inputId)
    textBox.value = description
};

var copyPasteStore = function(inputId,tBId ){
    var event = document.getElementById(inputId).value;
    localStorage.setObj(inputId, event);
    pasteSauce(inputId)
};

pasteSauce("9am");
pasteSauce("10am");
pasteSauce("11am");
pasteSauce("12pm");
pasteSauce("1pm");
pasteSauce("2pm");
pasteSauce("3pm");
pasteSauce("4pm");
pasteSauce("5pm");
