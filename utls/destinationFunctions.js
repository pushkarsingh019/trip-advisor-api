import Destination from "../models/destination.js"

export const createTravelDestination = async (name, location, description, rating, reviews) => {
    const newDestination = new Destination({
        name,
        location : {
            city : location.city,
            country : location.country,
        },
        description,
        rating,
        reviews,
    });
    await newDestination.save()
};

export const readTravelDestination =  async (destinationName) => {
    const destinationDetails =  await Destination.find({name : destinationName});

    console.log(destinationDetails);
}

export const readTravelDestinationByLocation = async (location) => {
    const travelLocations = await Destination.find({ $or : [{'location.city' : location}, {'location.country' : location}]});

    console.log(travelLocations);
};

export const readTravelDestinationByRating = async () => {
    const travelLocations = await Destination.find({})
    travelLocations.sort((a,b) => b.rating - a.rating);
    console.log(travelLocations);
};

export const updateTravelDestination = async (destinationId, updatedDestination) => {
    await Destination.findByIdAndUpdate(destinationId, updatedDestination)
};

export const deleteTravelDestination = async (destinationId) => {
    await Destination.deleteOne({_id : destinationId})
};

export const filterDestinationsByRating = async (minRating) => {
    let destinations = await Destination.find({rating : { $gte : minRating}});
    console.log(destinations);
};

