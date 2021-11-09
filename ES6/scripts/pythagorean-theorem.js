/*
    Name: Changming Tan
    Date: 2/27/2019
    IT 207
    URL: http://ctan.greenriverdev.com/207/ES6/scripts/pythagorean-theorem.js
    
    This web page uses Pythagorean Theorem (a2 + b2 = c2).*/
    
    
        
        let calculateBtn = document.getElementById('calculate');
        let clear = document.getElementById('clear');        
        let result = document.getElementById('result');

        
        let calculate = () => {

                
            let a = document.getElementById('a').value;
            let b = document.getElementById('b').value;
            let c = document.getElementById('c').value;
        
            a = Math.pow(a, 2);
            b = Math.pow(b, 2);
            c = Math.pow(c, 2);
            
            let sideA = Math.sqrt((c-b)).toFixed(2);
            let sideB = Math.sqrt((c-a)).toFixed(2);
            let sideC = Math.sqrt((a+b)).toFixed(2);
        
            if (a != null && b != null && c == "") {
                result.textContent = "Side C is the square root of " + (a+b) + " or about " + sideC + ".";
            }
            else if (a != null && b == "" && c != null) {
                result.textContent = "Side B is the square root of " + (c-a) + " or about " + sideB + ".";
            }
            else if (a == "" && b != null && c != null) {
                result.textContent = "Side A is the square root of " + (c-b) + " or about " + sideA + ".";
            }
            else {
                result.textContent = "Please only enter two sides";
            }
        };
        
        let reset = () => {
            result.textContent = "";
            document.getElementById('a').value = "";
            document.getElementById('b').value = "";
            document.getElementById('c').value = "";
        };

        calculateBtn.onclick = calculate;
        clear.onclick = reset;
    