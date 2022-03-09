let fm = document.querySelector('form');
let fn = document.getElementById('fullname');
let ms = document.getElementById('message');
let em = document.getElementById('email');
let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;



function handleForm(event) {
    // Prevents submitting form
    // and preserves user input inside the form
    event.preventDefault();

    let data = {};
    let errors = [];



 
    // check if user entered fullname
    if (fn.value !== '') {
     
        data.fullname = fn.value;

    } else {
        // otherwise report corresponding error message
        errors.push('Full name is missing.')
    }



    // check if user entered email
    if (em.value !== '') {

        // check if email is in correct format
        if (regex.test(em.value)) {
            // save the email inside data
            data.email = em.value;
        } else { 
            // therwise report corresponding error message
            errors.push('Please enter the valid email');
        }

    } else {
        // otherwise report corresponding error message
        errors.push('Email is missing')
    }



    // check if user entered message
    if (ms.value !== '') {
     
        data.message = ms.value;

    } else {
        // otherwise report corresponding error message
        errors.push('Message is missing.')
    }


    
    // handle feedback/error-messages:
    if (errors.length === 0) {
        // print out the feedback
        console.log(data);

        // clear the text inputs from the form
        fm.reset();

    } else {
        // print out the error messages
        console.log(errors);
    }


}

fm.addEventListener('submit', handleForm);
