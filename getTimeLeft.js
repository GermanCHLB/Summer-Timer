function getTimeLeft(date){
    const now = new Date();
    const date1 = new Date(date.year, date.month-1, date.day, date.hour, date.minute, date.second);
    const timeLeft = Math.ceil((date1-now)/1000);

    return{
        days: Math.floor(timeLeft/60/60/24),
        hours: Math.floor(timeLeft/60/60%24),
        minutes: Math.floor(timeLeft/60%60),
        seconds: Math.floor(timeLeft%60)
    };

}

export default getTimeLeft;