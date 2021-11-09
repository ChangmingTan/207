//Define a greeting function
function greetings()
{
    //Get the value from the textbox
    var name = txt.value;
    
    //Display message on page
    msg.innerHTML = "hello, " + name;
    
}

//Get the page elements
var btn = document.getElementById('btnclick');
var txt = document.getElementById('txtname');
var msg = document.getElementById('message');

//Tie the function to the button click event
//No need to put greetings();
btn.onclick = greetings;


//function for the second button
function helloWorld()
{
    alert("This is second button.");
}

var btn2 = document.getElementById('btnclick2');

btn2.onclick = helloWorld;  //end of function of the second button



//======================================================================
//modifying object properties
var btnDisable = document.getElementById('btn-disable');	
btnDisable.onclick = disable;

function disable()
{
   document.getElementById('fname').disabled = true;
}



//======================================================================
//innerhtml property
var p = document.getElementById('p1');
p.onclick = changeMe;

function changeMe()
{
    p.innerHTML = 'Yowza!';
}	



//======================================================================
var btnClear = document.getElementById('btn-clear');	
btnClear.onclick = clear;

function clear()
{
	document.getElementById('firstName').value = "";
	btnClear.disabled = true;		
	btnClear.innerHTML = "Don't Click Me";
}















