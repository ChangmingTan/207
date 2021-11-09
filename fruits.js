//define a function called highlight() that adds the "yummy" class to the selected item(this)
function highlight()
{
    this.className = 'yummy';
}

//assign the highlight function to the onclick event for every list item
var items = document.getElementsByTagName('li');
for (var i=0; i < items.length; i++)
{
    items[i].onclick = highlight;
}


//==================================================================

var stringList = document.getElementById('fruits');
stringList.toString();
var text = document.getElementById('txtFruit');


//define an addFruit() function in your JavaScript block
function addFruit()
{
    
        //get the fruit out of the text input and assign it to a variavle called newFruit
        var newFruit = document.getElementById('txtFruit').value;
        
        //create new <li> element
        var newElement = document.createElement('li');
    
        //create a new text node containing the fruit the user entered
        var newText = document.createTextNode(newFruit);
        
        //get the fruit <ul> list
        var list = document.getElementById('fruits');
    
    if (newFruit.length !== 0 && text.value != stringList)
    {

        //assign the highlight function to the new element's onclick event 
        newElement.onclick = highlight;
        
        //appened the text node to the <li> element
        newElement.appendChild(newText);
        
        //append the <li> element to the list
        list.appendChild(newElement);
    }
    
    //reset button value after clicking
    document.getElementById('txtFruit').value = '';
}

btn.onclick = addFruit;


//==================================================================

//define a function that gets all of the li elements, and removes the class from those elements

var list = document.getElementById('fruits');
var listItems = list.childNodes; //returns an array of the ul children - li 

function clearFunction() {
    for (var j=0; j < listItems.length; j++) {
        listItems[j].className = "";
    }
}

clr.onclick = clearFunction;


//==================================================================
//Challenge: Modify your program so that the user cannot add a fruit that is already in the list, or that is empty.