// sets current time, day of the week and date
var date = $('#currentDay').text(moment().format('kk:mm, dddd, MMMM Do YYYY'));


function colorBlock() {
    // picks current time
    var currentTime = moment().hours();
    // loops trough each timeblock div's
        $('.time-block').each(function () {
           var time = parseInt($(this).attr('id'));
           console.log(time, currentTime)
     // sets grey color to timeblock divs that are less than current time (hours that already in past)
           if (currentTime > time) {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
    // sets red color to timeblock div that is equal to current time (current hour)
        } else if (currentTime === time) {
            $(this).addClass('present');
            $(this).removeClass('past');
            $(this).removeClass('future');
    // sets green color to timeblock divs that are more than current time ((hours that in future)
        } else {
            $(this).addClass('future');
            $(this).removeClass('past');
            $(this).removeClass('present');
        }
    
        });
    
}
// calls above function and recalls each 20 minutes to be up to date with current timetime
colorBlock()
setInterval(colorBlock, 20000)


// gets data from lacal storage
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
$('#16 .description').val(localStorage.getItem('16'));
$('#17 .description').val(localStorage.getItem('17'));
$('#18 .description').val(localStorage.getItem('18'));




// below function makes save button responsive
$('.saveBtn').on('click', function () {
// picks up time info
var taskTime = $(this).parent().attr('id');
// picks up task info
var taskDescription = $(this).siblings('.description').val();
// saves time and task info to local storage
localStorage. setItem(taskTime, taskDescription);

// removes hide class from 'Event is saved in local storage' message 
$('.savedTask').addClass('unhide');


// adds hide class to 'Event is saved in local storage' message 
setTimeout(fade_out, 5000);
function fade_out() {
  $(".savedTask").removeClass('unhide');
  
};

});




