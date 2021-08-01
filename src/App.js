import React from 'react';
import ReactDOM from 'react-dom';
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
        
                <ul id="days-of-week"class="day-of-week">
                  {WEEKDAYS.map(weekday => <li>{weekday}</li>)}
                </ul>
                <ul id="calendar-days" class="days-grid" />
        </div>
    );
}

export default App;