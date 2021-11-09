/*
    Name: Changming Tan
    Date: 2/20/2019
    IT 207
    URL: http://ctan.greenriverdev.com/207/assn6.html
    
    Assignment 6: BMI (Body-Mass Index) calculator. BMI is calculated by dividing weight (in kilograms) by height (in meters) squared.
*/

//create variables for inputs, button, and the empty div
var height = document.getElementById('height');
var weight = document.getElementById('weight');
var button = document.getElementById('button');
var result = document.getElementById('result');

//checkInputs()accepts a height and a weight as parameters.
//If either height or weight are negative or NaN, returns false. Otherwise, it returns true.
function checkInputs(height, weight)
{
    if (height < 0 || weight < 0 || isNaN(height) || isNaN(weight) || height === "" || weight === "")
    {
        return false;
    }
    else
    {
        return true;
    }
}

//convertWeight() acceptsa weight in poundsas a parameter,
//multiplies it by 0.45 to convert it to kilograms, and returns the result.
function convertWeight(weight)
{
    return weight * 0.45;
}

//convertHeight() acceptsa height in inchesas a parameter,
//multiplies it by 0.025 to convert it to meters, and returns the result.
function convertHeight(height)
{
    return height * 0.025;
}

//calcBMI()acceptsa height and a weight as parameters. It divides the weight (in KG) by the height (in meters) squared,
//and returns the result. It should use the convertWeight() and convertHeight() functions.
function calcBMI(height, weight)
{
    height = convertHeight(height);
    weight = convertWeight(weight);
    return weight / Math.pow(height, 2);
}

//getRange() acceptsa BMIas a parameter,and returns the corresponding range,
//based on the following conversions:
/*BMI           Range
  <19       Underweight
  19-24     Healthy
  25-29     Overweight
  30-39O    besity
  40+       Extreme Obesity
*/

function getRange(bmi)
{
    if (bmi < 19)
        return "Underweight";
    else if (bmi <= 24)
        return "Healthy";
    else if (bmi <= 29)
        return "Overweight";
    else if (bmi <= 39)
        return "Obesity";
    else
        return "Extreme Obesity";
}

//function called go() that executes when the Calculate button is clicked.
//The go function should:
function go()
{
    //Get the inputs from the text boxes.
    var weightValue = weight.value;
    var heightValue = height.value;
    
    //If the inputs are valid, calculate and display the BMI and the Range.
    //BMI should be rounded to one decimal place.
    if (checkInputs(heightValue, weightValue))
    {
        var bmi = calcBMI(heightValue, weightValue).toFixed(1);
        var rangeMessage = getRange(bmi);

        result.innerHTML = "<h3>Your BMI is " + bmi + ".</h3>";
        result.innerHTML += "<h3>You fall in the  " + rangeMessage + " range.</h3>";
    }
    
    //If the inputs are not valid, display an error message
    else
    {
        result.innerHTML = "<h3>Height and weight must be greater than zero.</h3>";
    }
}

//clear result div
result.innerHTML = "";
//onclick event to trigger go() function
button.onclick = go;
