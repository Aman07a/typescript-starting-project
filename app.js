var userInput;
var userName;
userInput = 5;
userInput = "Aman";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
    // while (true) {}
}
generateError("An error occurred!", 500);
