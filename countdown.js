// countdown.js

// Set the target date for February 19, 2029
const targetDate = new Date("February 19, 2029 00:00:00").getTime();
// Set the origin date as October 8, 2023
const originDate = new Date("October 8, 2023 00:00:00").getTime();

// Total time in milliseconds between the origin date and target date
const totalTime = targetDate - originDate;

// Update the countdown every 1 second (1000 milliseconds)
const countdown = setInterval(() => {
    // Get the current date and time
    const now = new Date().getTime();

    // Find the difference between the target date and now in milliseconds
    const timeDifference = targetDate - now;

    // Define time units
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30.44; // Average month length
    const year = day * 365;

    // Calculate hours, minutes, and seconds (used in both cases)
    const hours = Math.floor((timeDifference % day) / hour);
    const minutes = Math.floor((timeDifference % hour) / minute);
    const seconds = Math.floor((timeDifference % minute) / second);

    // If the time remaining is greater than 365 days, display in years, months, weeks, and days along with hours, minutes, seconds
    if (timeDifference >= year) {
        const years = Math.floor(timeDifference / year);
        const months = Math.floor((timeDifference % year) / month);
        const weeks = Math.floor(((timeDifference % year) % month) / week);
        const days = Math.floor((((timeDifference % year) % month) % week) / day);

        // Display two rows: one for years/months/weeks/days, and one for hours/minutes/seconds
        document.getElementById("timer").innerHTML = `
            <div>${years} years, ${months} months, ${weeks} weeks, ${days} days</div>
            <div>${hours} hours, ${minutes} minutes, ${seconds} seconds.</div>
        `;
    } 
    // If the time remaining is less than 365 days, display in days, hours, minutes, seconds
    else if (timeDifference >= 0 && timeDifference < year) {
        const days = Math.floor(timeDifference / day);

        // Display one row: days, hours, minutes, seconds
        document.getElementById("timer").innerHTML = `
            <div>${days}d ${hours}h ${minutes}m ${seconds}s</div>
        `;
    } 
    // If the countdown is finished
    else {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Project:Claire has been Completed.";
    }

    // Calculate the days passed since the origin date
    const timePassed = now - originDate;
    const daysPassed = Math.floor(timePassed / day); // Calculate in days
    const totalDays = Math.floor(totalTime / day);   // Total days from origin to target

    // Calculate progress percentage based on days
    const progressPercent = (daysPassed / totalDays) * 100;

    // Update the progress bar's width and display the percentage inside it
    const progressBar = document.getElementById("progress-bar");
    progressBar.style.width = progressPercent + "%";
    progressBar.innerHTML = Math.floor(progressPercent) + "%"; // Display percentage as text

}, 1000);
