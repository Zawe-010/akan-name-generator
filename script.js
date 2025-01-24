// Akan names for male and female, based on the day of the week
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Function to calculate the day of the week using the formula
function calculateDayOfWeek(day, month, year) {
    const CC = Math.floor(year / 100); // Century digits
    const YY = year % 100;            // Year digits
    let MM = month;
    const DD = day;

    // Adjust for Zeller’s Congruence formula (January and February)
    if (MM < 3) {
        MM += 12;  // January and February are treated as months 13 and 14
        YY -= 1;   // Decrease year for January and February
    }

    // Zeller's Congruence Formula to calculate the day of the week
    const dayOfWeek = (DD + Math.floor(13 * (MM + 1) / 5) + YY + Math.floor(YY / 4) + Math.floor(CC / 4) - 2 * CC) % 7;

    // Return the day of the week (0 = Saturday, 1 = Sunday, etc.)
    return (dayOfWeek + 7) % 7;  // Ensure a positive result
}

// Function to validate date input (to prevent invalid days and months)
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

    // Calculate the day of the week using the formula
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
