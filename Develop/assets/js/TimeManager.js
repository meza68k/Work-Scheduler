//time api i will be using
var timeApi = 'http://worldtimeapi.org/api/ip';
//object handlers
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
};
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
};
var updateTime = false;

// Displays the date with the corresponding month.
function displayDate(date){
    if(date[1] = '06'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "June "+date[2]+", "+date[0];
    }else if (date[1] = '07'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "July "+date[2]+", "+date[0];
    }else if (date[1] = '08'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "August "+date[2]+", "+date[0];
    }else if (date[1] = '09'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "September "+date[2]+", "+date[0];
    }else if (date[1] = '10'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "October "+date[2]+", "+date[0];
    }else if (date[1] = '11'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "November "+date[2]+", "+date[0];
    }else if (date[1] = '12'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "December "+date[2]+", "+date[0];
    }else if (date[1] = '01'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "January "+date[2]+", "+date[0];
    }else if (date[1] = '02'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "February "+date[2]+", "+date[0];
    }else if (date[1] = '03'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "March "+date[2]+", "+date[0];
    }else if (date[1] = '04'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "April "+date[2]+", "+date[0];
    }else if (date[1] = '05'){
        currentDate = document.getElementById('currentDay')
        currentDate.textContent = "May "+date[2]+", "+date[0];
    }
};

var updateTime = function(){
//fetch the time
 fetch(timeApi)
 .then(function(response){
    return response.json();
 })
 .then(function(response){
    //organizes the time so it can be pulled dynamically
     var dT = response.datetime;
     var dayTime = (dT.split("."))
     dayTime.length = 1;
     var arrayTime = dayTime[0].split('T');
     var date = arrayTime[0].split('-');
     var time = arrayTime[1].split(':');
     console.log(date);
     displayDate(date);
 });
};

updateTime();


