 /*
    Name: Changming Tan
    Date: 3/3/2019
    IT 207
    URL: http://ctan.greenriverdev.com/207/survey.js
    
    Form Assignment:
    A web form that allows Green River students to complete a Student Satisfaction survey. 
    */

       
       
       
       
        //Get the form
        var form = document.getElementById('survey-form');
        form.onsubmit = validateForm;
        
        //Validate the form
        function validateForm()
        {
            //Flag Variable to track validity
            var isValid = true;
            
            //Validate first name
            var txtFirst = document.getElementById('fname');
            var firstname = txtFirst.value;  //or shortcut: var firstname = document.getElementById('fname').value;
            var errFname = document.getElementById('error-fname');
        
            if (firstname === "")
            {
                errFname.className = 'error';
                isValid = false;  //prevents the form to be submitted
            }
            else
            {
                errFname.className = 'hidden';
            }
            
            //Validate last name
            var lastname = document.getElementById('lname').value;
            var errLname = document.getElementById('error-lname');
            
            if (lastname === "")
            {
                errLname.className = 'error';
                isValid = false;
            }
            else
            {
                errLname.className = 'hidden';
            }

            
            //Validate major
            var major = document.getElementById('major').value;
            var errMajor = document.getElementById('error-major');
            
            if (major === 'none')
            {
                errMajor.className = 'error';
                isValid = false;
            }
            else
            {
                errMajor.className = 'hidden';
            }
            
            //Validate survey questions-answers 1
            var method1 = document.getElementsByName('method1');
            var errMethod1 = document.getElementById('error-method1');
            
            //Loop through the NodeList
            var count1 = 0;
            for (var i in method1)
            {
                //If a button is clicked, hide error and increment counter
                if (method1[i].checked === true)
                {
                    errMethod1.className = 'hidden';
                    count1++;
                }
            }
            
            //If count1 is zero, no buttons were checked
            if (count1 === 0)
            {
                errMethod1.className = 'error';
                isValid = false;
            }
            
            
            //Validate survey questions-answers 2
            var method2 = document.getElementsByName('method2');
            var errMethod2 = document.getElementById('error-method2');
            
            //Loop through the NodeList
            var count2 = 0;
            for (var j in method2)
            {
                //If a button is clicked, hide error and increment counter
                if (method2[j].checked === true)
                {
                    errMethod2.className = 'hidden';
                    count2++;
                }
            }
            
            //If count2 is zero, no buttons were checked
            if (count2 === 0)
            {
                errMethod2.className = 'error';
                isValid2 = false;
            }
            
            
            //Validate survey questions-answers 3
            var method3 = document.getElementsByName('method3');
            var errMethod3 = document.getElementById('error-method3');
            
            //Loop through the NodeList
            var count3 = 0;
            for (var b in method3)
            {
                //If a button is clicked, hide error and increment counter
                if (method3[b].checked === true)
                {
                    errMethod3.className = 'hidden';
                    count3++;
                }
            }

            //If count3 is zero, no buttons were checked
            if (count3 === 0)
            {
                errMethod3.className = 'error';
                isValid = false;
            }
  
  
          
            //Validate terms
            var terms = document.getElementById('terms').checked;
            var errTerms = document.getElementById('error-terms');
            
            if (terms === false)
            {
                errTerms.className = 'error';
                isValid = false;
            }
            else
            {
                errTerms.className = 'hidden';
            }
            
            
            //prevents the form to be submitted, stay on the same page
            return isValid;  //if false returns false, if true returns ture
        
        }