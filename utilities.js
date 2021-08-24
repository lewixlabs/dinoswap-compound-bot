// inspired by https://usefulangle.com/post/187/nodejs-get-date-time
function logTime() {
    let date_ob = new Date();

    // current date
    // adjust 0 before single digit date
    let day = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    console.log(`${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`);
}

exports.logTime = logTime;