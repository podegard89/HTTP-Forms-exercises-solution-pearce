window.addEventListener("load", function () {
    // select the form element so we can add a "submit" event listener so we validate the inputs.
    // notice I gave all of the elements I wanted to select an id attribute in the html file
    // Refer to JavaScript Form Validation in Chapter 25 to get some more insight on form validation.
    let form = document.getElementById("inputForm");
    form.addEventListener("submit", function () {
        // select all input elements that need validation (don't have default values)
        let nameInput = document.getElementById("nameInput");
        let dateInput = document.getElementById("dateInput");
        let rocketTypeInput = document.getElementById("rocketTypeInput");
        let boosterCountInput = document.getElementById("boosterCountInput");

        // make an array of those elements
        let inputArray = [nameInput, dateInput, rocketTypeInput, boosterCountInput];

        // loop through the array to check each input element's ~~VALUE~~
        for (i = 0; i < inputArray.length; i++) {
            if (inputArray[i].value === "") {
                alert("All fields are required!");
                // apparently VSC says "event" is deprecated on my end. This can be safely ignored. It will still work. 
                event.preventDefault();
                // Break out of the loop so that the loop stops when it finds an input element with no value
                // If you are confused by this break statement, try removing it and then running it again!
                break;
            }
        }
    })
})