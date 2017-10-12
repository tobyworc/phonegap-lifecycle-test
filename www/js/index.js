var paused_count =0;            //set paused_count to 0
var resumed_count = 0;          //set resumed_count to 0
var launched_count = 0;         //set launched_count to 0

document.addEventListener("deviceready", onDeviceReady, false); //creates event listener for when the device is ready. 
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);    //displayed count for number of times application is launched using jquery
	$("#resumed").text("Application paused: " + paused_count);         //displayed count for number of times application is paused using jquery
	$("#paused").text("Application resumed: " + resumed_count);        //displayed count for number of times application is resumed using jquery
}


// device APIs are available
//
    function onDeviceReady() {                                      //run this function when called, called when device is ready 
	
	document.addEventListener("resume", onResume, false);      ////creates event listener for when the app has been resumed. 
	document.addEventListener("pause", onPause, false);        ////creates event listener for when the app has been paused. 
	
	launched_count++;      //add one to count for number of times application has been launched
	updateDisplay();       //run update display function
	    
	alert("device ready");     //pop up alert saying device ready
    }


    function onPause() {         //run this function when called, called when app is paused 
	
	paused_count++;            //add one to count for number of times application has been paused
	updateDisplay();           //run update display function
	    
	alert("pause");            //pop up alert saying device ready
    }
	

    function onResume() {       //run this function when called, called when app is resumed 
		
	resumed_count++;           //add one to count for number of times application has been resumed
	updateDisplay();           //run update display function
	    
	alert("resume");           //pop up alert saying device ready
    }
