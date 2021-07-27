import React from 'react';
import './App.css';
import './node_modules/dayjs';

var dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

const weekday = require("dayjs/plugin/weekday");
const weekOfYear = require("dayjs/plugin/weekOfYear");

dayjs.extend(weekday);
dayjs.extend(weekOfYear);


const App = () => {
    
    return (
        <div className="App">
            
            <div class="calendar-month" />
                
                <section class="calendar-month-header"/>
                <div id="selected-month" class="calendar-month-header-selected-month" />
                    <div class="calendar-month-header-selectors"/>
                        <span id="previous-month-selector" >{'<'}</span>
                        <span id="present-month-selector">{'>'}</span>
                        <span id="next-month-selector">{'<'}</span>
        
                <ul id="days-of-week"class="day-of-week" />
                <ul id="calendar-days" class="days-grid" />

            <h1>Meal planner</h1>

        </div>
    );
}

export default App;
