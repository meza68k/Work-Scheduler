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

//setting variables for each slot
var nineAm = document.getElementById('9am');
var tenAm = document.getElementById('10am');
var elevenAm = document.getElementById('11am');
var twelvePm = document.getElementById('12pm');
var onePm = document.getElementById('1pm');
var twoPm = document.getElementById('2pm');
var threePm = document.getElementById('3pm');
var fourPm = document.getElementById('4pm');
var fivePm = document.getElementById('5pm');







//past present and now 
var timeConverter = function(time){
    var hour = Number(time[0]);
    //debugger;
    if(hour <= 8 ){
        console.log("before opening");
        nineAm.classList.add("future");
        tenAm.classList.add("future");
        elevenAm.classList.add("future");
        twelvePm.classList.add("future");
        onePm.classList.add("future");
        twoPm.classList.add("future");
        threePm.classList.add("future");
        fourPm.classList.add("future");
        fivePm.classList.add("future");
    }else if(hour === 9){
        console.log("its 9am")
        nineAm.classList.add("present");
        tenAm.classList.add("future");
        elevenAm.classList.add("future");
        twelvePm.classList.add("future");
        onePm.classList.add("future");
        twoPm.classList.add("future");
        threePm.classList.add("future");
        fourPm.classList.add("future");
        fivePm.classList.add("future");
    }else if(hour === 10){
        console.log("its 10am")
        nineAm.classList.add("past");
        tenAm.classList.add("present");
        elevenAm.classList.add("future");
        twelvePm.classList.add("future");
        onePm.classList.add("future");
        twoPm.classList.add("future");
        threePm.classList.add("future");
        fourPm.classList.add("future");
        fivePm.classList.add("future");
    }else if(hour === 11){
        console.log("its 11am")
        nineAm.classList.add("past");
        tenAm.classList.add("past");
        elevenAm.classList.add("present");
        twelvePm.classList.add("future");
        onePm.classList.add("future");
        twoPm.classList.add("future");
        threePm.classList.add("future");
        fourPm.classList.add("future");
        fivePm.classList.add("future");
    }else if(hour === 12){
        console.log("its 12pm")
        nineAm.classList.add("past");
        tenAm.classList.add("past");
        elevenAm.classList.add("past");
        twelvePm.classList.add("present");
        onePm.classList.add("future");
        twoPm.classList.add("future");
        threePm.classList.add("future");
        fourPm.classList.add("future");
        fivePm.classList.add("future");
    }else if(hour === 13){
        console.log("its 1pm")
        nineAm.classList.add("past");
        tenAm.classList.add("past");
        elevenAm.classList.add("past");
        twelvePm.classList.add("past");
        onePm.classList.add("present");
        twoPm.classList.add("future");
        threePm.classList.add("future");
        fourPm.classList.add("future");
        fivePm.classList.add("future");
    }else if(hour === 14){
        console.log("its 2pm")
        nineAm.classList.add("past");
        tenAm.classList.add("past");
        elevenAm.classList.add("past");
        twelvePm.classList.add("past");
        onePm.classList.add("past");
        twoPm.classList.add("present");
        threePm.classList.add("future");
        fourPm.classList.add("future");
        fivePm.classList.add("future");
    }else if(hour === 15){
        console.log("its 5pm")
        nineAm.classList.add("past");
        tenAm.classList.add("past");
        elevenAm.classList.add("past");
        twelvePm.classList.add("past");
        onePm.classList.add("past");
        twoPm.classList.add("past");
        threePm.classList.add("present");
        fourPm.classList.add("future");
        fivePm.classList.add("future");
    }else if(hour === 16){
        console.log("its 5pm")
        nineAm.classList.add("past");
        tenAm.classList.add("past");
        elevenAm.classList.add("past");
        twelvePm.classList.add("past");
        onePm.classList.add("past");
        twoPm.classList.add("past");
        threePm.classList.add("past");
        fourPm.classList.add("past");
        fivePm.classList.add("present");
    }else if(hour === 17){
        console.log("its 5pm")
        nineAm.classList.add("past");
        tenAm.classList.add("past");
        elevenAm.classList.add("past");
        twelvePm.classList.add("past");
        onePm.classList.add("past");
        twoPm.classList.add("past");
        threePm.classList.add("past");
        fourPm.classList.add("past");
        fivePm.classList.add("present");
    }else if(hour > 17){
        console.log("its past time")
        nineAm.classList.add("past");
        tenAm.classList.add("past");
        elevenAm.classList.add("past");
        twelvePm.classList.add("past");
        onePm.classList.add("past");
        twoPm.classList.add("past");
        threePm.classList.add("past");
        fourPm.classList.add("past");
        fivePm.classList.add("past");
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
     console.log(time);
     displayDate(date);
     timeConverter(time);
 });
};

updateTime();


