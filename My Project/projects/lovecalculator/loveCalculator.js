function loveScore() {
// Get the DOM elements
var name1 = document.getElementById('name1').value;
var name2 = document.getElementById('name2').value;
var result = document.getElementById('result');
var message = '';

// Function to generate random love score and display result 
    // Generate a new random love score each time
    var loveScore = Math.floor(Math.random() * 100) + 1;

    // Set the message based on the love score
    if (loveScore > 89) {
        message = 'Your love score is ' + loveScore + '%. You love each other like Kanye loves Kanye.';
    } else if (loveScore > 75 && loveScore <= 89) {
        message = 'Your love score is ' + loveScore + '%. You go together like peanut butter and jelly.';
    } else if (loveScore >= 55 && loveScore <= 75) {
        message = 'Your love score is ' + loveScore + '%. You are better off as friends.';
    } else {
        message = 'Your love score is ' + loveScore + '%. Give up now.';
    }

    // Display the message in the result section
    result.innerHTML = message;
}
