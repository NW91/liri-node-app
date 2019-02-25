require("dotenv").config();
    console.log(process.argv);

//Constructors
var axios = require("axios");
var Spotify = require('node-spotify-api');
var BandsInTown = require('bandsInTown');
var fs = require("fs");


//Instructions from gitlab
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

//need to add these commands?
// concert-this
// spotify-this-song 
// movie-this 
// do-what-it-says

var bandsInTown2 = process.argv[2]
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

bandsInTown2.find({search: bandsInTown, name: "venue", location: "place", date: "MM/DD/YYYY"}, function(err, result) {
    if (err) console.log(err)

    console.log(JSON.stringify(result, null, 2));
});