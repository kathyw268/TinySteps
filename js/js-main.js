var homeView = {
    init: function(){
        homeView.getPages();
        homeView.menu();
    },

    menu: function(){
        $('.square-btn').click(function(){
            $('.menu').toggle();
        }); 
    },

    getPages:function(){
        // Make switch statement for each page and show/hide accordingly 

        $('.note').click(function(){
            $('.popup-note').show();
        });

        var goHome = function(){
            location.reload(true);
        };
        $('.go-home').click(goHome); 

        $('.show-new').click(function(){
            $('#new-page').show();
            $('#home').hide();
        });
    }

};

var goalView ={
    // set up handlebars and local storage
    format: function(){

    },
    load: function(){
        var source   = $("#goal-template").html();
        var template = Handlebars.compile(source);

    },
    save: function(){

    }
};



function pageSetUp() {
}



$(document).ready(function(){
    
 /*   
    var goalName = [];
    var goalNote = [];
    var dataMedia = ["note", "image", "video"];*/
    
    
    $('.square-btn').click(function(){
        $('.menu').toggle();
    }); 
    $('.note').click(function(){
        $('.popup-note').show();
    });

    var goHome = function(){
        location.reload(true);
    };
    
    $('.go-home').click(goHome);
    
    $('.show-new').click(function(){
        $('#new-page').show();
        $('#home').hide();
    });
                       
    
 /*   var firstLast = function(){
        $('.goal-list').each(function(){
        $(this).prepend('<li class="goal"></li>')
        $(this).append('<li class="goal"></li>');
    });
    }; */
    var goalData = [];
    var goalName = [];
    var complete = [];
    var goalNote = [];
    var dataMedia = "note";
    var getName = function(){
        if (storedNames){
            goalName = storedNames;
        }
        else {
              return false};
    };
    
    $('#add-goal').submit(function(){
        if ($('input').val() !== '') {
            getName();
            goalName.push($('input').val());
            localStorage.setItem('goalName', JSON.stringify(goalName));
            goHome();
        };
    });
    var getStatus = function(){
        if (storedStatus){
            complete = storedStatus;
        }
        else {
              return false;
        };
    };    
    
    $('#note').submit(function(){
        if ($('textarea').val() !== ''){
            goHome();
            console.log("submit works!");
        }
        else{
        $('textarea').val('');
        alert('Your note is empty!')
        };    
    });
var storedNames = JSON.parse(localStorage["goalName"]);
    if(storedNames) {
        for (var i = 0; i < storedNames.length; i++ ){
        $('.all-goals').append('<h2>' + storedNames[i] + '</h2><ul class="goal-list"><li class="first goal"></li><li class="last goal"></li></ul>' );
        }
    };
   
   
//    firstLast();
    $('.first').click(function(){
        console.log('this works');
        alert('You completed your first step by defining your goal. Congrats!')
    });
    $('li.last').click(function(){
        var n = $(this).parent().index('.goal-list');
        goalData[n]= [storedNames[n],storedStatus[n]];   
        $('#complete-page').show();
        $('#home').hide();
        $('#skip').click(function(){
        complete[n].push('nodata');
        localStorage.setItem('complete', JSON.stringify(complete));
        getStatus;    
    });
             
    });    
    var storedStatus = JSON.parse(localStorage["complete"]);
        if(storedStatus) {
        for (var i = 0; i < storedStatus.length; i++ ){
        $("li.goal:last-child").before('<li class="goal"></li>');
        }
    };

    
    

    $('.goal-list').scrollLeft($(this).height());
    /*if (dataMedia === "note"){
        $('.goal').css('background-image', 'url("img/pencil.png")');
    }*/
     
    $('#clear').click( function() {
        if(confirm('All of your goals will be deleted and cannot be restored. Are you sure you want to clear your goals?'))
        window.localStorage.clear();
        location.reload();
        return false;
});
   
    console.log(storedNames[0]);
    console.log(storedStatus[1]);
});