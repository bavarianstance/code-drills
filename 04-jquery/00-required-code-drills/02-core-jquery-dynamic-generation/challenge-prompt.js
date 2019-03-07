$(document).ready(function () {

    $(document).on("click", "#randomLetter", function() {

        // create variable called `text` and have it equal an empty string
        let text = "";
        
        // create a variable called `possibleLetters` that contains all the letters of the alphabet
        let possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        
        // Create a new variable `randIndex` that is a random number between 0 and the last index of `possibleLetters`
        let randIndex = Math.floor(Math.random() * possibleLetters.length)
        
        // Using the `randIndex` and `possibleLetters` variables, set `randLetter` to be a random letter
        randLetter = possibleLetters.charAt(randIndex);

        
        // console log the value of `randLetter`
        console.log(randLetter);

        
        // append `randLetter` to the element with an id of `letters`

        $("#letters").append(randLetter);


    });

});
