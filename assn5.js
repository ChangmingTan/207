    
    //array variable for animals
    var animals = ['dog', 'elephant', 'fish', 'frog', 'lion', 'rabbit', 'tiger'];
    
    //variable for randomly show one animal name from the array
    var rand = animals[Math.floor(Math.random() * animals.length)];
    
    //show the animal name inside the section
    document.getElementById('name').innerHTML = rand;
    
    //variable to get each img and put it in a variable
    var dog = document.getElementById('dog');
    var elephant = document.getElementById('elephant');
    var fish = document.getElementById('fish');
    var frog = document.getElementById('frog');
    var lion = document.getElementById('lion');
    var rabbit = document.getElementById('rabbit');
    var tiger = document.getElementById('tiger');
    
    //variable to get all img tags and put it in a variable
    var images = document.getElementsByTagName('img');
    
    //get the section and put it in a variable
    var sentence = document.getElementById('sentence');
    
    //get the style class and put it in a variable
    var imgBorder = document.getElementsByClassName('imgBorder');
    
    //click on and loop to trigger result() function
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = result;
    }
    
    //function loop to remove border from all img and add border on clicked img
    //pop up yes or no responses inside the if condition
    function result() {
        for (var i = 0; i < imgBorder.length; i++) {
            imgBorder[i].classList.remove('imgBorder');
        }
        
        this.classList.add('imgBorder');
        
        if (rand !== this.id) {
            sentence.innerHTML = "<p3>Nope. Try again.</p3>";
        }
        else {
            sentence.innerHTML = "<p2>You got it!</p2>";
        }
    }