const leapYears = function(year) {
    if (typeof year !== 'number' || year < 0) {
        return 'ERROR';
    }
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
