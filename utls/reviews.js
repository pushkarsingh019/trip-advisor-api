import Destination from "../models/destination.js";
import { v4 as uuid } from "uuid";

export const addReview = async (destinationId, userId, userReview) => {
    const destinationToUpdate = await Destination.findById(destinationId);

    const newReview = {
        user : userId,
        text : userReview
    };

    destinationToUpdate.reviews.push(newReview);

    await destinationToUpdate.save()
};

export const getReview = async (destinationId) => {
    const destination = await Destination.findById(destinationId);
    console.log(destination.reviews.slice(0,3).filter(element => element !== undefined));
};


