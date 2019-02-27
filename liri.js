require("dotenv").config();
var keys = require("./keys.js");

//Constructors
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotifyAPI = new Spotify(keys.spotify);
var moment = require("moment");
var fs = require("fs");

var commands = process.argv[2];

var nodeArgs = process.argv;
var info = "";

for (var i=3; i<nodeArgs.length; i++) {
    if (i>3 && i<nodeArgs.length){
        info = info + "+" + nodeArgs[i];
    } else {
        info += nodeArgs[i];
    }
}
// var BandsInTown = require('bandsInTown');
// var request = require('request')


var runGivenCommands = function () {
    if (commands === "spotify-this-song") {
        if (info === "") {
            info = "Redbone"
        }
        spotifyAPI.search({ type: 'track', query: 'media', limit: 1 }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }

        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Preview Link: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);
    });

} else if (commands === "movie-this") {
        if (info === "") {
            info = "Mr. Nobody";
        }

        var queryUrl = "http://www.omdbapi.com/?t=" + name + "&y=&plot=short&apikey=trilogy";

        axios.get(queryUrl).then(
            function(response) {
                console.log("Title: " + response.data.Title);
                console.log("Movie Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.Ratings[0].Value);
                console.log("Rotten Tomatoes Ratings: " + response.data.Ratings[1].Value);
                console.log("Country Origin: " + response.data.Country);
                console.log("Movie Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors List: " + response.data.Actors);
            }
        );
        } else if (commands === "concert-this") {
            var queryUrl = "https://rest.bandsintown.com/artists/" + media + "/events?app_id=codingbootcamp";

            axios.get(queryUrl).then(
                function(response) {

                    var eventTime = response.data[0].datetime;
                    
                    console.log("Venue: " + response.data[0].venue.name);
                    console.log("Venue Location " + response.data[0].venue.city);
                    console.log("Date of Event: " + moment(eventTime).format("MM/DD/YYYY"));


        commands = dataArr[0];
        info = dataArr[1];
        runGivenCommands();
        });

    }

}

runGivenCommands();