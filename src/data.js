import {calendar} from './base'

let data = [];
for(let year = 1900; year <= 2100; ++year) {
    let oYear = {value: year, label: year + ''};
    oYear.children = [];
    for (let month = 1; month <= 12; ++ month) {
        let oMonth = {value: month - 1, label: month + ''};
        oMonth.children = [];
        let days = calendar.solarDays(year, month - 1);
        for (let day = 1; day <= days; ++day) {
            let oDay = {value: day, label: day + ''};
            oDay.children = [];
            for (let hour = 0; hour < 24; ++ hour) {
                oDay.children.push({value: hour, label: hour + ''});
            }
            oMonth.children.push(oDay);
        }
        oYear.children.push(oMonth);
    }
    data.push(oYear);
}
let ldata = [];
for(let year = 1900; year <= 2100; ++year) {
    let oYear = {value: year, label: year + ''};
    oYear.children = [];
    let leapMonth = calendar.leapMonth(year);
    for (let month = 0; month < 12; ++ month) {
        let oMonth = {value: month, label: calendar.toChinaMonth(month + 1)};
        oMonth.children = [];
        let days = calendar.solarDays(year, month - 1);
        for (let day = 1; day <= days; ++day) {
            let oDay = {value: day, label: calendar.toChinaDay(day)};
            oDay.children = [];
            for (let hour = 0; hour < 12; ++ hour) {
                oDay.children.push({value: hour, label: calendar.Zhi[hour]});
            }
            oMonth.children.push(oDay);
        }
        oYear.children.push(oMonth);
        if (leapMonth > 0 && month + 1 === leapMonth) {
            let oMonth = {value: month, label: '\u95f0' + calendar.toChinaMonth(month + 1)};
            oMonth.children = [];
            let leapDays = calendar.leapDays(year);
            for (let day = 1; day <= days; ++day) {
                let oDay = {value: day, label: calendar.toChinaDay(day)};
                oDay.children = [];
                for (let hour = 0; hour < 12; ++ hour) {
                    oDay.children.push({value: hour, label: calendar.Zhi[hour]});
                }
                oMonth.children.push(oDay);
            }
            oYear.children.push(oMonth);
        }
    }
    
    data.push(oYear);
}
export const pickerData = data;
export const pickerLdata = ldata;
