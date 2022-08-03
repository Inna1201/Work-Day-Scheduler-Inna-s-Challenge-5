var date = $('#currentDay').text(moment().format('kk:mm, dddd, MMMM Do YYYY'));


function colorBlock() {
    var currentTime = moment().hours();
    
        $('.time-block').each(function () {
           var time = parseInt($(this).attr('id'));
           console.log(time, currentTime)

           if (currentTime > time) {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
        } else if (currentTime === time) {
            $(this).addClass('present');
            $(this).removeClass('past');
            $(this).removeClass('future');
        } else {
            $(this).addClass('future');
            $(this).removeClass('past');
            $(this).removeClass('present');
        }
    
        });
    
}
colorBlock()
setInterval(colorBlock, 20000)



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



$('.saveBtn').on('click', function () {
  
var taskTime = $(this).parent().attr('id');
var taskDescription = $(this).siblings('.description').val();
localStorage. setItem(taskTime, taskDescription);

$('.hide').removeClass('hide')

})


