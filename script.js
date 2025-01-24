// Akan names for male and female, based on the day of the week
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Function to calculate the day of the week
function calculateDayOfWeek(day, month, year) {
    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    const dayOfWeek = Math.floor(((CC / 4) - 2 * CC - 1 + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD) % 7);
    return dayOfWeek;
}

// Function to validate the date input
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

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.getElementById("gender").value;

    // Validate date
    if (!validateDate(day, month)) {
        return;
    }

    // Calculate day of the week
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
