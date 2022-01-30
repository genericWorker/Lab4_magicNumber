                
var guess = prompt("Enter a whole number");
var guessNumber = parseInt(guess);

if (isNaN(guess)) {
    alert("Not a number!");
    window.location.reload(false)
}

var tempNumber = guessNumber;
var origNumber = guessNumber;
guessNumber += 9;
document.write("<ul>");

document.write("<li>I added  9 to " + tempNumber + ". The new number is " + guessNumber + "</li>");
tempNumber = guessNumber;
guessNumber *= 2;

document.write("<li>I multiplied " + tempNumber + " by 2. " + "The new number is " + guessNumber + ".</li>");
tempNumber = guessNumber;
guessNumber -= 4;
document.write("<li>I subtracted 4 from " + tempNumber + "." + "The new number is " + guessNumber + ".</li>");
tempNumber = guessNumber;
guessNumber = guessNumber / 2;
document.write("<li>I divided " + tempNumber + " by 2." + "The new number is " + guessNumber + ".</li>");
tempNumber = guessNumber;
document.write("<li>I subtracted your original number of " + origNumber + " from " + guessNumber + ".</li></ul>");
guessNumber -= origNumber;
document.write("<h3>Your final number is " + guessNumber + "<h3>");
document.write("<h1> Thanks for playing Magic Number.  ");
document.write("<a href = \"javascript:window.location.reload(false)\"><br> Play Again? </a></h1>");