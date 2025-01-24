// Akan names for male and female, based on the day of the week
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Function to calculate the day of the week using the provided formula
function calculateDayOfWeek(day, month, year) {
    const CC = Math.floor(year / 100); // Century digits (e.g., 1989 -> 19)
    const YY = year % 100;            // Year digits (e.g., 1989 -> 89)
    let MM = month;
    const DD = day;

    // Zeller's formula to calculate day of the week (using the provided formula)
    const dayOfWeek = (Math.floor(CC / 4) - 2 * CC - 1 + Math.floor(5 * YY / 4) + Math.floor(26 * (MM + 1) / 10) + DD) % 7;

    // Return day of the week (adjusting for the modulus result)
    return (dayOfWeek + 7) % 7;  // Ensure positive values (0-6)
}

// Function to validate date input (to ensure valid days and months)
function validateDate(day, month) {
    if (day <= 0 || day > 31) {
        alert("Please enter a valid day (1-31).");
        return false;
    }
    if (month <= 0 || month > 12) {
        alert("Please enter a valid month (1-12).");
        return false;
    }
    return true;
}

// Event listener for form submission
document.getElementById("birthdayForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the user input
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    // Validate date input
    if (!validateDate(day, month)) {
        return;
    }

    // Calculate the day of the week
    const dayOfWeek = calculateDayOfWeek(day, month, year);

    // Determine Akan name based on gender and day of the week
    let akanName = "";
    if (gender === "male") {
        akanName = maleNames[dayOfWeek];
    } else if (gender === "female") {
        akanName = femaleNames[dayOfWeek];
    }

    // Display the Akan name
    document.getElementById("result").textContent = `Your Akan name is ${akanName}`;
});
