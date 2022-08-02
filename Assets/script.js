var date = $('#currentDay').text(moment().format('kk:mm, dddd, MMMM Do YYYY'));

var currentTime = moment().hours();

var scheduleTime = $('.hour').val()

console.log(scheduleTime)


function colorBlock() {
    for (var i = 0; i < scheduleTime.length; i++)
        var time = scheduleTime[i]

    if (currentTime > time) {
        $('.time-block').addClass('past');
        $('.time-block').removeClass('future');
        $('.time-block').removeClass('present');
    } else if (currentTime === time) {
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




