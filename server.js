import express from "express";
import mongoose from "mongoose";

const app = express();

// importing functions
import { createTravelDestination, deleteTravelDestination, filterDestinationsByRating, readTravelDestination, readTravelDestinationByLocation, readTravelDestinationByRating, updateTravelDestination } from "./utls/destinationFunctions.js";
import { addReview, getReview } from "./utls/reviews.js";


const travelDestination = {
    name : "5 rating place",
    location : {city : "Texas", country : "USA"},
    description : "Ryan holiday lives here",
    rating : 5,
    reviews : []
};

// createTravelDestination(travelDestination.name, travelDestination.location, travelDestination.description, travelDestination.rating, travelDestination.reviews )

// readTravelDestination("Bastrop");

// readTravelDestinationByLocation("USA");

// updateTravelDestination("651bc412bbd9dbc8a54b79e6", {
//     name : "real place",
//     location : {city : "Barcelona", country : "Spain"},
//     description : "a good place",
//     rating : 5,
//     reviews : []
// });

// readTravelDestinationByRating()

// deleteTravelDestination("651ba3b477eb3f846ce31c4f")

// addReview("651beef5db0e492c5fa700f7", 1, "this is good")

getReview("651beef5db0e492c5fa700f7")

app.listen(3000, () => {
    mongoose.connect("mongodb://localhost/travel-destination");
    console.log("listening on port 3000")
});