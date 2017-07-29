import {calendar} from './base'

let data = [];
for(let year = 1900; year <= 2100; ++year) {
    let oYear = {value: year, label: year + '年'};
    oYear.children = [];
    for (let month = 1; month <= 12; ++ month) {
        let oMonth = {value: month, label: month + '月'};
        oMonth.children = [];
        let days = calendar.solarDays(year, month);
        for (let day = 1; day <= days; ++day) {
            let oDay = {value: day, label: day + '日'};
            oDay.children = [];
            for (let hour = 0; hour < 24; ++ hour) {
                let label = hour;
                if (hour < 10) {
                    label = '0' + hour;
                }
                let oHour = {value: hour, label: label + ''};
                oHour.children = [];
                for (let min = 0; min < 60; min += 5) {
                    let label = min;
                    if (min < 10) {
                        label = '0' + min;
                    }
                    let oMin = {value: min, label: label + ''};
                    oHour.children.push(oMin);
                }
                oDay.children.push(oHour);
            }
            oMonth.children.push(oDay);
        }
        oYear.children.push(oMonth);
    }
    data.push(oYear);
}
let ldata = [];
for(let year = 1900; year <= 2100; ++year) {
    let oYear = {value: year, label: year};
    oYear.children = [];
    let leapMonth = calendar.leapMonth(year);
    for (let month = 1; month <= 12; ++ month) {
        let oMonth = {value: month, label: calendar.toChinaMonth(month)};
        oMonth.children = [];
        let days = calendar.monthDays(year, month);
        for (let day = 1; day <= days; ++day) {
            let oDay = {value: day, label: calendar.toChinaDay(day)};
            oDay.children = [];
            for (let hour = 0; hour < 12; ++ hour) {
                oDay.children.push({value: hour, label: calendar.Zhi[hour] + '时'});
            }
            oMonth.children.push(oDay);
        }
        oYear.children.push(oMonth);
        if (leapMonth > 0 && month === leapMonth) {
            let oMonth = {value: month + 12, label: '\u95f0' + calendar.toChinaMonth(month)};
            oMonth.children = [];
            let leapDays = calendar.leapDays(year);
            for (let day = 1; day <= leapDays; ++day) {
                let oDay = {value: day, label: calendar.toChinaDay(day)};
                oDay.children = [];
                for (let hour = 0; hour < 12; ++ hour) {
                    oDay.children.push({value: hour, label: calendar.Zhi[hour] + '时'});
                }
                oMonth.children.push(oDay);
            }
            oYear.children.push(oMonth);
        }
    }
    
    ldata.push(oYear);
}
export const pickerData = data;
export const pickerLdata = ldata;
