var paused_count =0;            //set paused_count to 0
var resumed_count = 0;          //set resumed_count to 0
var launched_count = 0;         //set launched_count to 0

var pKey = "paused";
var rKey = "resumed"
var lKey = "launched"

document.addEventListener("deviceready", onDeviceReady, false); //creates event listener for when the device is ready. 
		
	window.localStorage.setItem (pKey, paused_count);
	window.localStorage.setItem (rKey, resumed_count);
	window.localStorage.setItem (lKey, launched_count);
	
function updateDisplay() {
		
		
		
	window.localStorage.getItem (pKey, paused_count);
	window.localStorage.getItem (rKey, resumed_count);
	window.localStorage.getItem (lKey, launched_count);
	
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
	
	window.localStorage.setItem (lKey, launched_count);
	
	updateDisplay();       //run update display function
	    
	console.log("device ready");     //pop up console.log saying device ready
    }


    function onPause() {         //run this function when called, called when app is paused 
	
	paused_count++;            //add one to count for number of times application has been paused
	
	window.localStorage.setItem (pKey, paused_count);
	
	updateDisplay();           //run update display function
	    
	console.log("pause");            //pop up console.log saying device ready
    }
	

    function onResume() {       //run this function when called, called when app is resumed 
		
	resumed_count++;           //add one to count for number of times application has been resumed

	window.localStorage.setItem (rKey, resumed_count);
	
	updateDisplay();           //run update display function
	    
	console.log("resume");           //pop up console.log saying device ready
    }
