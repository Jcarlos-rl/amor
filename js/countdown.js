const DATE_TARGET = new Date('08/18/2022 00:01 AM');
// DOM for render
const SPAN_HOURS = document.querySelector('span#hours');
const SPAN_MINUTES = document.querySelector('span#minutes');
const SPAN_SECONDS = document.querySelector('span#seconds');
// Milliseconds for the calculations
const MILLISECONDS_OF_A_SECOND = 1000;
const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

function updateCountdown() {
    // Calcs
    const NOW = new Date()
    const DURATION = DATE_TARGET - NOW;
    const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
    const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
    const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);

    // Render
    SPAN_HOURS.textContent = (REMAINING_HOURS <= 0) ? '-' : REMAINING_HOURS;
    SPAN_MINUTES.textContent = (REMAINING_MINUTES <= 0) ? '-' : REMAINING_MINUTES;
    SPAN_SECONDS.textContent = (REMAINING_SECONDS <= 0) ? '-' : REMAINING_SECONDS;

    if(REMAINING_HOURS <= 0 && REMAINING_MINUTES <= 0 && REMAINING_SECONDS <= 0){
        document.getElementById('loading_lottie').style.display = 'none';
        document.getElementById('happy_lottie').style.display = 'block';
        document.getElementById('continue_btn').style.display = 'block';
    }
}

updateCountdown();
// Refresh every second
setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);