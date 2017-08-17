import _ from 'underscore';
import mongoose from 'mongoose'

function removeFromArray(item, array) {
  let index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1)
  }
}


// Extra instructions don't user
// Loop through userid array
  // Assuming i = 0
  // Get ID of i and i + 1 index
  // If first and second person have been matched before, do i and i + 2 index
  // Once you get two users that haven't been matched before,
    // place either users ID into each other's userMatched array in their user model
    // tell the messenger bot that you have a match
      // extract anon and public profile from both models
      // in bot message, send you've matched with (public name), check out their profile in (anon profile view link)
    // add each other's profile to history of matches
    // increase index to
      // if i + 1 match, move i to i + 2, so that now you're in i + 2 and i + 3 position
      // if i + n match, save match index to index of people matched, and check the next index with all indexes already saved
        // if indexes match, move to index where it doesn't match
        // if end, end and delete matches index array
        // if indexes don't match, move to that index

let matchLater = (userIds) => {
  let matchedArr = [];
  let yetToMatch = userIds; // All user ID's looking to get matched at a point

  yetToMatch.forEach((i) => {
    User.findById(i, (err, user) => { // Get the entire user model for a user
      if (err) {
        throw new Error("Can't find user")
      } else {
        let matcherId = i
        User.find( { "matchHistory" : { $nin: yetToMatch } }, (err, unMatchedUsers) => { // Get array of matchedHistory for User i
          if (err) {
            throw new Error("Can't find not matched users")
          } else {
            // If there is a user that hasn't been matched yet
              // User to match = unMatchedUsers[0]
              // Add each other's ID to matchedUserArr on their respective model
              // Add both ID's to matchedArr, either in arr pairs or individually
              // remove ID's from yetToMatch Array
            let matchId = unMatchedUsers[0];
            User.findById(matchId, (err, user) => {
              if (err) {
                throw new Error("Can't find user being matched")
              } else {
                User.findOneAndUpdate(matcherId, {$push: {matchHistory: matcherId}}) // Add match to matchHistory
                User.save(done) // TODO: check if correct
              }
            })
            User.findOneAndUpdate(matchId, {$push: {matchHistory: matchId}}) // Add match to matchHistory
            User.save(done) // TODO: check if correct

            // Add both ID's to matchedArr, remove both from yetToMatch
            matchedArr.push([matcherId, matchId])
            removeFromArray(matchId, yetToMatch)
            // removeFromArray(matcherId, yetToMatch) // can't do this because it permutates the array being looped


            // Else (no users to match)
              // TODO: Figure this out
          }
        } )
      }
    })
  })

}

export default matchLater;
