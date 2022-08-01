$('#currentDay').text(moment().format('kk:mm, dddd, MMMM Do YYYY'));




function colorBlock() {

var currentTime = moment().hours();
var scheduleTime = $('.hour');



console.log(currentTime)
console.log(scheduleTime)
    
        if (currentTime > scheduleTime) {
            $('.time-block').addClass('past');
            $('.time-block').removeClass('future');
            $('.time-block').removeClass('present');
        } else if (currentTime === scheduleTime) {
            $('.time-block').addClass('present');
            $('.time-block').removeClass('past');
            $('.time-block').removeClass('future');

        } else {
            $('.time-block').addClass('future');
            $('.time-block').removeClass('past');
            $('.time-block').removeClass('present');
        }
}

colorBlock()