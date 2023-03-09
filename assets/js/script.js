
$(function () {
    // get local storage to repopulate textarea inputs
    var storedEvent9 = localStorage.getItem("textArea9");
    if(storedEvent9 !== null) {
      $('#hour-9 textarea').text(storedEvent9);
    };

    var storedEvent10 = localStorage.getItem("textArea10");
    if(storedEvent10 !== null) {
      $('#hour-10 textarea').text(storedEvent10);
    }

    var storedEvent11 = localStorage.getItem("textArea11");
    if(storedEvent11 !== null) {
      $('#hour-11 textarea').text(storedEvent11);
    };

    var storedEvent12 = localStorage.getItem("textArea12");
    if(storedEvent12 !== null) {
      $('#hour-12 textarea').text(storedEvent12);
    };

    var storedEvent13 = localStorage.getItem("textArea13");
    if(storedEvent13 !== null) {
      $('#hour-13 textarea').text(storedEvent13);
    };

    var storedEvent14 = localStorage.getItem("textArea14");
    if(storedEvent14 !== null) {
      $('#hour-14 textarea').text(storedEvent14);
    };

    var storedEvent15 = localStorage.getItem("textArea15");
    if(storedEvent15 !== null) {
      $('#hour-15 textarea').text(storedEvent15);
    };

    var storedEvent16 = localStorage.getItem("textArea16");
    if(storedEvent16 !== null) {
      $('#hour-16 textarea').text(storedEvent16);
    };

    var storedEvent17 = localStorage.getItem("textArea17");
    if(storedEvent17 !== null) {
      $('#hour-17 textarea').text(storedEvent17);
    };

    var storedEvent18 = localStorage.getItem("textArea18");
    if(storedEvent18 !== null) {
      $('#hour-18 textarea').text(storedEvent18);
    };
  
    // save textarea values to local storage at save button onclick
    $('#hour-9 button').on('click', function(event) {      
        var textArea9 = $('#hour-9 textarea').val();
        localStorage.setItem("textArea9", textArea9);    
      });
    
    $('#hour-10 button').on('click', function(event) {      
        var textArea10 = $('#hour-10 textarea').val();
        localStorage.setItem("textArea10", textArea10);    
      });
     
    $('#hour-11 button').on('click', function(event) {      
      var textArea11 = $('#hour-11 textarea').val();
      console.log(textArea11);
      localStorage.setItem("textArea11", textArea11);    
    });
  
    $('#hour-12 button').on('click', function(event) {      
      var textArea12 = $('#hour-12 textarea').val();
      localStorage.setItem("textArea12", textArea12);
    });
    
    $('#hour-13 button').on('click', function(event) {      
      var textArea13 = $('#hour-13 textarea').val();
      localStorage.setItem("textArea13", textArea13);
    });
  
    $('#hour-14 button').on('click', function(event) {      
      var textArea14 = $('#hour-14 textarea').val();
      localStorage.setItem("textArea14", textArea14);
    });
  
    $('#hour-15 button').on('click', function(event) {      
      var textArea15 = $('#hour-15 textarea').val();
      localStorage.setItem("textArea15", textArea15);
    });
  
    $('#hour-16 button').on('click', function(event) {      
      var textArea16 = $('#hour-16 textarea').val();
      localStorage.setItem("textArea16", textArea16);
    });
  
    $('#hour-17 button').on('click', function(event) {      
      var textArea17 = $('#hour-17 textarea').val();
      localStorage.setItem("textArea17", textArea17);
    });
  
    $('#hour-18 button').on('click', function(event) {      
      var textArea18 = $('#hour-18 textarea').val();
      localStorage.setItem("textArea18", textArea18);
    });
    
    
    //display the current date in the header of the page.
    //set interval to keep time and page current
    var currentDay = dayjs().format('dddd, D MMMM  YYYY');
    var currentTime = dayjs().format('hh : mm');
    console.log(currentTime);
    $('#currentDay').text(currentDay);
    
    function time() {
        setInterval(() => {
            var twenty4 = dayjs().format('hh : mm ss')
            $('#currentTime').text(twenty4);
        }, 1000)
    }
    time()
    
    //set calender block out color based on time

     var time8 = dayjs().set('hour', 8).set('minute', 00);  
     var diff8 = dayjs().diff(time8, 'minutes');
    
    if (diff8 > 0 && diff8 < 60) {
      $('.time-block-8').addClass('present');
    } else if(diff8 > 60) {
      $('.time-block-8').addClass('past');
    } else if (diff8 <= 0) {
      $('.time-block-8').addClass('future');
    }

     var time9 = dayjs().set('hour', 9).set('minute', 00);  
     var diff9 = dayjs().diff(time9, 'minutes');
    
    if (diff9 > 0 && diff9 < 60) {
      $('.time-block-9').addClass('present');
    } else if(diff9 > 60) {
      $('.time-block-9').addClass('past');
    } else if (diff9 <= 0) {
      $('.time-block-9').addClass('future');
    }
    
    var time10 = dayjs().set('hour', 10).set('minute', 00);  
    var diff10 = dayjs().diff(time10, 'minutes');
  
    if (diff10 > 0 && diff10 < 60) {
        $('.time-block-10').addClass('present');
      } else if(diff10 > 60) {
        $('.time-block-10').addClass('past');
      } else if (diff10 <= 0) {
        $('.time-block-10').addClass('future');
      };
    
    var time11 = dayjs().set('hour', 11).set('minute', 00);  
    var diff11 = dayjs().diff(time11, 'minutes');
  
    if (diff11 > 0 && diff11 < 60) {
        $('.time-block-11').addClass('present');
      } else if(diff11 > 60) {
        $('.time-block-11').addClass('past');
      } else if (diff11 <= 0) {
        $('.time-block-11').addClass('future');
      };
  
    var time12 = dayjs().set('hour', 12).set('minute', 00);  
    var diff12 = dayjs().diff(time12, 'minutes');
  
    if (diff12 > 0 && diff12 < 60) {
        $('.time-block-12').addClass('present');
      } else if(diff12 > 60) {
        $('.time-block-12').addClass('past');
      } else if (diff12 <= 0) {
        $('.time-block-12').addClass('future');
      };
  
    var time13 = dayjs().set('hour', 13).set('minute', 00);  
    var diff13 = dayjs().diff(time13, 'minutes');
  
    if (diff13 > 0 && diff13 < 60) {
        $('.time-block-13').addClass('present');
      } else if(diff13 > 60) {
        $('.time-block-13').addClass('past');
      } else if (diff13 <= 0) {
        $('.time-block-13').addClass('future');
      };
  
    var time14 = dayjs().set('hour', 14).set('minute', 00);  
    var diff14 = dayjs().diff(time14, 'minutes');
  
    if (diff14 > 0 && diff14 < 60) {
        $('.time-block-14').addClass('present');
      } else if(diff14 > 60) {
        $('.time-block-14').addClass('past');
      } else if (diff14 <= 0) {
        $('.time-block-14').addClass('future');
      }
    
    var time15 = dayjs().set('hour', 15).set('minute', 00); 
    var diff15 = dayjs().diff(time15, 'minutes');
    
    if (diff15 > 0 && diff15 < 60) {
        $('.time-block-15').addClass('present');
      } else if(diff15 > 60) {
        $('.time-block-15').addClass('past');
      } else if (diff15 <= 0) {
        $('.time-block-15').addClass('future');
      };
    
    var time16 = dayjs().set('hour', 16).set('minute', 00);  
    var diff16 = dayjs().diff(time16, 'minutes');
  
    if (diff16 > 0 && diff16 < 60) {
        $('.time-block-16').addClass('present');
      } else if(diff16 > 60) {
        $('.time-block-16').addClass('past');
      } else if (diff16 <= 0) {
        $('.time-block-16').addClass('future');
      }
    
    var time17 = dayjs().set('hour', 17).set('minute', 00);  
    var diff17 = dayjs().diff(time17, 'minutes');
  
    if (diff17 > 0 && diff17 < 60) {
        $('.time-block-17').addClass('present');
      } else if(diff17 > 60) {
        $('.time-block-17').addClass('past');
      } else if (diff17 <= 0) {
        $('.time-block-17').addClass('future');
      }
  
    var time18 = dayjs().set('hour', 18).set('minute', 00);  
    var diff18 = dayjs().diff(time18, 'minutes');
  
    if (diff18 > 0 && diff18 < 60) {
        $('.time-block-18').addClass('present');
      } else if(diff18 > 60) {
        $('.time-block-18').addClass('past');
      } else if (diff18 <= 0) {
        $('.time-block-18').addClass('future');
      };
  
  });
  
  