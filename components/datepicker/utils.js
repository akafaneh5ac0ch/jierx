import {strPad} from '../utils';

export function getNowDate() {
    // only date without time
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    
    return now;
}
export function isEqual(a, b) {
    if (a && b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate()
    }
    return false;
}

export function isLT(a, b) {
    if (a && b) {
        const aYear = a.getFullYear();
        const bYear = b.getFullYear();
        if (aYear < bYear) {
            return true;
        } else if (aYear > bYear) {
            return false;
        }

        const aMonth = a.getMonth();
        const bMonth = b.getMonth();
        if (aMonth < bMonth) {
            return true;
        } else if (aMonth > bMonth) {
            return false;
        }

        const aDay = a.getDate();
        const bDay = b.getDate();
        if (aDay < bDay) {
            return true;
        } else if (aDay > bDay) {
            return false;
        }
    }

    return false;
}

export function isGT(a, b) {
    return isLT(b, a);        
}

export function getDateString(date, type) {
    const year = date.getFullYear();
    if (type === 'year') {
        return year;
    }
    const month = `${year}-${strPad(date.getMonth() + 1, 2)}`;
    if (type === 'month') {
        return month;
    }
    const _date = `${month}-${strPad(date.getDate(), 2)}`;

    if (type !== 'datetime') {
        return _date;
    }

    return `${_date} ${getTimeString(date)}`;
}

export function getTimeString(date) {
    return [
        strPad(date.getHours(), 2),
        strPad(date.getMinutes(), 2),
        strPad(date.getSeconds(), 2)
    ].join(':');
}
