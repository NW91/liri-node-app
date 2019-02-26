require("dotenv").config();
var keys = require("./keys.js");

//Constructors
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotifyAPI = new Spotify(keys.spotify);
// var BandsInTown = require('bandsInTown');
var request = require('request')
var fs = require("fs");



 
spotifyAPI.search({ type: 'track', query: 'stayin alive' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data.tracks.items[0]); 
});

//need to add these liri commands?
// concert-this
// spotify-this-song 
// movie-this 
// do-what-it-says

// var bandsInTown2 = process.argv[2]
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

// bandsInTown2.find({search: bandsInTown, name: "venue", location: "place", date: "MM/DD/YYYY"}, function(err, result) {
//     if (err) console.log(err)

//     console.log(JSON.stringify(result, null, 2));
// });