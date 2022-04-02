import getTimeLeft from './getTimeLeft.js';

const  app = document.getElementById('app');
const timerContainer = app.querySelector('.timerContainer')
setInterval(()=>{
const summer = {
    year: 2022,
    month: 6,
    day:1,
    hour:0,
    minute:0,
    second:0
}
let timeLeft = getTimeLeft(summer);
    timerContainer.textContent = timeLeft.days + ':' + timeLeft.hours + ':' + timeLeft.minutes + ':' + timeLeft.seconds;

},1000)


