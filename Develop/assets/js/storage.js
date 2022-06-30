Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};


var copyPasteStore = function(inputId,tBId ){
    var event = document.getElementById(inputId).value;
    localStorage.setObj(inputId, event);
};
