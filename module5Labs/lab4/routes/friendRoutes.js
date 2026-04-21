const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

// TODO #1:
// Add support to /filter for:
// ?gender=male
// ?letter=R
// or both together

// TODO #2:
// Modify /info so it only returns:
// - user-agent
// - content-type
// - accept

// TODO #3:
// Modify /:id so it returns the matching friend object

// TODO #4:
// Complete the PUT route so it updates an existing friend

// Default endpoint - return all friends
router.get("/", (req, res) => {
  res.json(friends);
});

// Filter endpoint
router.get("/filter", (req, res) => {
  console.log(req.query);
  // Read query parameters from the URL
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  // Start with a copy of the full array
  // Question:
  // - Why copy instead of changing the original array? -> If not copied it will alter the whole filter so when I make multiple requests it will error out
  let matchingFriends = [...friends];

  // If gender exists, filter by gender
  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender,
    );
  }
  // If letter exists, filter names by starting letter
  if (filterLetter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.toUpperCase().startsWith(filterLetter.toUpperCase()),
    );
  }
  // Return matches if any exist
  // Otherwise return a 404
  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({
      error: `No friends matching gender ${filterGender} and starting letter ${filterLetter}`,
    });
  }
});

// Info route
// Return only selected request header data
router.get("/info", (req, res) => {
  console.log(req.headers);

  // Only return:
  // - user-agent
  // - content-type
  // - accept
  res.json({
    "user-agent": req.headers["user-agent"],
    "content-type": req.headers["content-type"],
    accept: req.headers.accept,
  });
});

// Dynamic GET route
// Example:
// /friends/3
router.get("/:id", (req, res) => {
  console.log(req.params);

  // Read id from the route parameter
  let friendId = req.params.id;
  // Find ONE friend that matches the given id
  let matchedFriend = friends.find((friend) => friend.id == friendId);
  // Return the matching friend if found
  // Otherwise return 404
  if (matchedFriend) {
    res.status(200).json(matchedFriend);
  } else {
    res.status(404).json({
      error: `Friend with ID ${friendId} not found`,
    });
  }
});

// POST route - add a new friend
router.post("/", (req, res) => {
  let newFriend = req.body;
  console.log(newFriend);
  // Validate required fields
  // Question:
  // - What fields should every friend have? -> a name & gender & id
  if (!newFriend.name || !newFriend.gender) {
    res.status(500).json({
      error: "Friend object must contain a name and gender",
    });
    return;
  } else if (!newFriend.id) {
    // Generate an id if one is not provided
    newFriend.id = friends.length + 1;
  }
  // Add the new friend to the array
  friends.push(newFriend);
  // Return the new friend
  res.status(200).json(newFriend);
});

// PUT route - update an existing friend
router.put("/:id", (req, res) => {
  let friendId = req.params.id;
  let updatedFriend = req.body;

  // Find the existing friend
  let oldFriend = friends.find((friend) => friend.id == friendId);
  if (oldFriend) {
    // Find the index of that friend in the array
    let oldFriendIndex = friends.indexOf(oldFriend);
    // Merge old data with new data
    // This keeps old values if the request only updates one field
    updatedFriend = { ...oldFriend, ...updatedFriend };
    // Replace the old friend in the array
    friends[oldFriendIndex] = updatedFriend;
    // Return the updated friend
    res.status(200).json({
      result: "Updated friend with ID " + friendId,
      data: updatedFriend,
    });
  } else {
    // Return 404 if friend not found
    res.status(404).json({
      result: "No friend with ID " + friendId,
    });
  }
});

module.exports = router;
