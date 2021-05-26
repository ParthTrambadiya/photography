$(document).ready(function(){
    $("#example").typer({
        strings: [
          "Modeling Photography",
          "Pre Wedding",
          "Function Photography",
          "Food & Drink Photography"
        ],
        typeSpeed: 100,
        backspaceSpeed: 20,
        backspaceDelay: 800,
        repeatDelay: 1000,
        repeat: true,
        autoStart: true,
        startDelay: 100,
        useCursor: true
    });

    //stellar
    $.stellar();

    //progessbar
    $('#pro1').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#3f3f3f',
        backgroundColor: '#EEEEEE',
        radius: '5px',
        height: '15px',
        width: '100%'
    });

    $('#pro2').LineProgressbar({
      percentage: 75,
      fillBackgroundColor: '#3f3f3f',
      backgroundColor: '#EEEEEE',
      radius: '5px',
      height: '15px',
      width: '100%'
    });

    $('#pro3').LineProgressbar({
      percentage: 70,
      fillBackgroundColor: '#3f3f3f',
      backgroundColor: '#EEEEEE',
      radius: '5px',
      height: '15px',
      width: '100%'
    });

    $('#pro4').LineProgressbar({
      percentage: 85,
      fillBackgroundColor: '#3f3f3f',
      backgroundColor: '#EEEEEE',
      radius: '5px',
      height: '15px',
      width: '100%'
    });
    

    //lightgallery
    $("#lightgallery").lightGallery({
      download: false,
      hideControlOnEnd: true
    });
});