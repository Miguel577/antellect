import _ from 'underscore';

let matchLater = () => {
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
}

export default matchLater;
