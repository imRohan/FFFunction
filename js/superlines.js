//CREATED BY ROHAN LIKHITE CONTACT@ROHANLIKHITE.COM

$(function () {
    var i, j, canvas, context, points = [], width, height, numLines = 7,interval,interval1;
    
    //get DOM elements
    canvas = $("#canvas")[0];
    context = canvas.getContext("2d");
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width  = window.innerWidth/2;
    canvas.style.height = window.innerHeight/2;
    width = canvas.width;
    height = canvas.height;
    context.lineWidth = 0.3;

    //create line elements inside the points array with X,Y,Vy,Vx values
    //vx= X axis Velocity vy= Y axis Velocity
        
    for(i = 0; i < 10 * numLines; i += 1) {
        points.push({x:Math.random() * width, y:Math.random() * height, vx:Math.random() * 4 -2, vy:Math.random() * 4 - 2});
    }

    //Different Functions for colors start ----


    //Green and Light Blue 
    function DrawLine () {
        
        for(j = 0; j < numLines; j += 1) {
           
              
            context.beginPath();

            // bezierCurveTo(ControlPoint1,ControlPoint2,EndPoint)
            context.bezierCurveTo(points[j * 10 + 2].x, points[j * 10 + 3].y,
                                  points[j * 10 + 3].x, points[j * 10 + 2].y,
                                  points[j * 10 + 1].x, points[j * 10 + 1].y);
            context.strokeStyle = "rgba(85,219,243,.7)";
            context.stroke();
            
            context.bezierCurveTo(points[j * 3 + 1].x, points[j * 3 + 1].y,
                                  points[j * 3 + 2].x, points[j * 3 + 2].y,
                                  points[j * 3 + 3].x, points[j * 3 + 3].y);
            context.strokeStyle = "rgba(71,198,64,.4)";
            context.stroke();


        }
        for(i = 0; i < points.length; i += 1) {
            points[i].x += points[i].vx;
            points[i].y += points[i].vy;
        }

    };

    //Orange and Pink

    function DrawOP () {
        
        for(j = 0; j < numLines; j += 1) {
           
              
            context.beginPath();
            context.bezierCurveTo(points[j * 10 + 2].x, points[j * 10 + 3].y,
                                  points[j * 10 + 3].x, points[j * 10 + 2].y,
                                  points[j * 10 + 1].x, points[j * 10 + 1].y);
            context.strokeStyle = "rgba(209,249,78,.5)";
            context.stroke();
            
            context.bezierCurveTo(points[j * 3 + 1].x, points[j * 3 + 1].y,
                                  points[j * 3 + 2].x, points[j * 3 + 2].y,
                                  points[j * 3 + 3].x, points[j * 3 + 3].y);
            context.strokeStyle = "rgba(209,78,180,.4)";
            context.stroke();
            


        }
        for(i = 0; i < points.length; i += 1) {
            points[i].x += points[i].vx;
            points[i].y += points[i].vy;
        }

    };

    //Grey and Yellow
    function DrawGY () {
        
        for(j = 0; j < numLines; j += 1) {
           
              
            context.beginPath();
            context.bezierCurveTo(points[j * 10 + 2].x, points[j * 10 + 3].y,
                                  points[j * 10 + 3].x, points[j * 10 + 2].y,
                                  points[j * 10 + 1].x, points[j * 10 + 1].y);
            context.strokeStyle = "rgba(0,137,167,.9)";
            context.stroke();
            
            context.bezierCurveTo(points[j * 3 + 1].x, points[j * 3 + 1].y,
                                  points[j * 3 + 2].x, points[j * 3 + 2].y,
                                  points[j * 3 + 3].x, points[j * 3 + 3].y);
            context.strokeStyle = "rgba(160,224,169,.4)";
            context.stroke();
            


        }
        for(i = 0; i < points.length; i += 1) {
            points[i].x += points[i].vx;
            points[i].y += points[i].vy;
        }

    };

    
   //Mouse Events for desktop users

    $("canvas").mouseup(function(){
      clearInterval(interval);
      clearInterval(interval1);
    }).mousedown(function(){
      interval = setInterval(DrawLine, 10);
    });

    //Touch Events for mobile users

    $("canvas").bind('touchend',function(event){
      clearInterval(interval);
      clearInterval(interval1);
    }).bind('touchstart',function(event){
      clearInterval(interval1);
      interval = setInterval(DrawLine, 10);
    }).bind('swiperight', function(event){
        interval1 = setInterval(DrawGY, 10);
    }).bind('swipeleft', function(event){
        interval1 = setInterval(DrawOP, 10);
    }).bind('orientationchange', function(event){
      if ($.event.special.orientationchange.orientation() == "landscape") {
        canvas.width=canvas.width;
    } 
    });




    
    

   





});