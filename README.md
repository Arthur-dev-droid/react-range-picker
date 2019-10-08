React Js based date/range picker, unlike other range pickers it uses single calendar to select the range.
[Click here to see it in action](https://codesandbox.io/s/async-rain-m5m831xjk9)

### install

```sh
$ npm i react-range-picker --save
```

### use

```sh
import RangePicker from "react-range-picker"

<RangePicker/>
```

### APIS

| API               | Type                       | Description                                                                                                                                                                                                                                       |
| ----------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onDateSelected    | function                   | gets called each time date/time gets selected (params - startDate<Date object>, startDate<Date object>)                                                                                                                                           |
| onOk              | function                   | gets called when calendar closes or ok/select button is pressed (params - startDate<Date object>, endDate<Date object>)                                                                                                                           |
| enableRange       | boolean                    | if true, range select will be enable (default false)                                                                                                                                                                                              |
| selectTime        | boolean                    | if true, time select will show up on date select (default false)                                                                                                                                                                                  |
| rangeTillEndOfDay | boolean                    | if true, then second selected date for range will have time of end of the day (11.59 PM) else it will have time of start of the day (12:00 AM)                                                                                                    |
| placeholder       | function => ReactComponent | change placeholder, placeholder function will recieve following object as param - `{startDate (date object),endDate (date object)}`                                                                                                               |
| footer            | function => ReactComponent | change footer, footer function will recieve following object as param - `{startDate (date object), endDate (date object),today (function) - to select today's date, ok (function) - closes the calendar and calls, onOk callback passed by user}` |

#### Note:

Use onOk instead of onDateSelected, because onDateSelected gets called multiple times and onOk gets called only once when calendar is closing.
