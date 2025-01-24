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

    // Log the day of the week for debugging
    console.log("Calculated Day of Week:", dayOfWeek);  // Check the day of the week

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
