import React from 'react';
import './App.css';
import './node_modules/dayjs';

var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");
const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const INITIAL_YEAR = dayjs().format("YYYY");
const INITIAL_MONTH = dayjs().format("M");

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

let currentMonthDays = createDaysForCurrentMonth(INITIAL_YEAR, INITIAL_MONTH);
let previousMonthDays = createDaysForPreviousMonth(INITIAL_YEAR, INITIAL_MONTH);
let nextMonthDays = createDaysForNextMonth(INITIAL_YEAR, INITIAL_MONTH);
let days = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
 
console.log(days);
 
function getNumberOfDaysInMonth(year, month) {
  return dayjs(`${year}-${month}-01`).daysInMonth();
}
 
function createDaysForCurrentMonth(year, month) {
  return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
    return {
      date: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
      dayOfMonth: index + 1,
      isCurrentMonth: true
    };
  });
}

function createDaysForPreviousMonth(year, month) {
  const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0].date);
  const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");

  // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
  const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
    ? firstDayOfTheMonthWeekday - 1
    : 6;

  const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0].date)
    .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
    .date();

  return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
    return {
      date: dayjs(
        `${previousMonth.year()}-${previousMonth.month() +
          1}-${previousMonthLastMondayDayOfMonth + index}`
      ).format("YYYY-MM-DD"),
      dayOfMonth: previousMonthLastMondayDayOfMonth + index,
      isCurrentMonth: false
    };
  });
}

function createDaysForNextMonth(year, month) {
  const lastDayOfTheMonthWeekday = getWeekday(
    `${year}-${month}-${currentMonthDays.length}`
  );
  const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");
  const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
    ? 7 - lastDayOfTheMonthWeekday
    : lastDayOfTheMonthWeekday;
  return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
    return {
      date: dayjs(
        `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
      ).format("YYYY-MM-DD"),
      dayOfMonth: index + 1,
      isCurrentMonth: false
    };
  });
}

function getWeekday(date) {
  return dayjs(date).weekday();
}


const App = () => {

    return (
        <div className="App">
            
            <div className="calendar-month" />
            <h1>Meal planner</h1>
                <section className="calendar-month-header"/>
                <div id="selected-month" class="calendar-month-header-selected-month" />
                    <div className="calendar-month-header-selectors"/>
                        <span id="previous-month-selector" >{'<'}</span>
                        <span id="present-month-selector">{'>'}</span>
                        <span id="next-month-selector">{'<'}</span>
        
                <li id="days-of-week"class="day-of-week">
                  {WEEKDAYS.map(weekday => <li>{weekday}</li>)}
                </li>
                <ul id="calendar-days" class="days-grid" />
        </div>
    );
}

export default App;
