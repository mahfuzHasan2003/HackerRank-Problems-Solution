function timeConversion(s) {
   const needToAddHour = s.endsWith("PM")
   let [hour, min, sec] = s.slice(0, -2).split(':');
   needToAddHour && hour !== "12" && (hour = (+hour + 12))
   !needToAddHour && hour === "12" && (hour = '00')
   return `${hour}:${min}:${sec}`;
}

// console.log(timeConversion("07:05:45PM"));
// console.log(timeConversion("07:05:45AM"));
// console.log(timeConversion("12:01:00PM"));
// console.log(timeConversion("12:00:00PM"));
// console.log(timeConversion("12:00:00AM"));
