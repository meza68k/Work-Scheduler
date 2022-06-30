var timeApi = 'http://worldtimeapi.org/api/ip';


//fetchs the time
fetch(timeApi)
.then(function(response){
    return response.json();
})
.then(function(response){
    var dT = response.datetime;
    var dayTime = (dT.split("."))
    dayTime.length = 1;
    var arrayTime = dayTime[0].split('T');
    console.log(arrayTime);
    var date = arrayTime[0].split('-');
    console.log(date);
    var time = arrayTime[1].split(':');
    console.log(time);
    sessionStorage.time
});
