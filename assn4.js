//assign the strike function to the onclick event for every list item
var items = document.getElementsByTagName('li');
for (var i=0; i < items.length; i++) {
    items[i].onclick = strike;
}

//define a function called strike() that adds the 'list' class to the selected item(this)
function strike() {
    this.className = 'strike';
}

//once click button, the image becomes visible and change the color of every other list items
function image() {
    document.getElementById('cake').style.visibility="visible";
        
    //create a classname changeColor and style it in the <style>
    var changeColor = document.getElementById('list');
    changeColor.className = "changeColor";
}


//define an addItem() function
function addItem() {
    
    //get the item out of the text input and assign it to a variavle called newItem
    var newItem = document.getElementById('txtitem').value;
    
    //create new <li> element
    var newElement = document.createElement('li');
    
    //assign the highlight function to the new element's onclick event 
    newElement.onclick = strike;
    
    //create a new text node containing the item the user entered
    var newText = document.createTextNode(newItem);
    
    //appened the text node to the <li> element
    newElement.appendChild(newText);
    
    //get the item <ul> list
    var list = document.getElementById('list');
    
    //append the <li> element to the list
    list.appendChild(newElement);
}

btn2.onclick = addItem;
