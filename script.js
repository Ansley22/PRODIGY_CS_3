let password = document.getElementById("password");
let power = document.getElementById("power-point");

password.oninput = function () {
    let value = password.value;

    // Define power levels and colors
    let widthPower = ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

    // Check password criteria
    let lengthCheck = value.length >= 6;
    let lowercaseCheck = /[a-z]/.test(value);
    let uppercaseCheck = /[A-Z]/.test(value);
    let numberCheck = /[0-9]/.test(value);
    let specialCheck = /[^0-9a-zA-Z]/.test(value);

    // Calculate the number of criteria met
    let criteriaMet = [lengthCheck, lowercaseCheck, uppercaseCheck, numberCheck, specialCheck].filter(Boolean).length;

    // Calculate the percentage based on criteria met
    let percentage = (criteriaMet / 5) * 100;
    let index = Math.floor(percentage / 25); // Determine the widthPower index

    // Update power bar based on criteria met
    power.style.width = widthPower[index];
    power.style.backgroundColor = colorPower[index];

    // Update checkmarks based on conditions
    document.getElementById("length-check").classList.toggle("valid", lengthCheck);
    document.getElementById("length-check").classList.toggle("invalid", !lengthCheck);

    document.getElementById("lowercase-check").classList.toggle("valid", lowercaseCheck);
    document.getElementById("lowercase-check").classList.toggle("invalid", !lowercaseCheck);

    document.getElementById("uppercase-check").classList.toggle("valid", uppercaseCheck);
    document.getElementById("uppercase-check").classList.toggle("invalid", !uppercaseCheck);

    document.getElementById("number-check").classList.toggle("valid", numberCheck);
    document.getElementById("number-check").classList.toggle("invalid", !numberCheck);

    document.getElementById("special-check").classList.toggle("valid", specialCheck);
    document.getElementById("special-check").classList.toggle("invalid", !specialCheck);
};
