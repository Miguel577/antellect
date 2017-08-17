import _ from 'underscore';
import moment from 'moment';
import matchNow from './matchNowFun';
import matchLater from './matchLaterFun';

// let date = new Date();
// let presentDay = switch (date.getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// let current_hour = date.getHours();

// Get current Day and Time
let presentDay = moment().format('dddd'); // Wednesday
let presentTime = moment().format('LT'); // Local Time, 4:59 PM

// All matching times are as of 7:00 AM ET
const weekly = 'Monday'
const matchTime = '7:00 AM'

// let userIds = ['dlkfj', 'asdf', ]

// var userModel = {
//   userId: String;
//   profile: {
//     aslkdfjj
//   },
//   facebookAuth: {
//
//   },
//   interests: [],
//   userMatched: [],
//   whenToMatch: [weekly, daily, search]
// }

// Weekly match
if ( presentTime === matchTime && presentDay === weekly) {
  matchLater();
}

// Daily match
if ( presentTime === matchTime ) {
  matchLater();
}

// Search match
if ( ) {
  matchNow();
}
