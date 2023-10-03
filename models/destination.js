// Destination Model
import mongoose from "mongoose"

const destinationSchema = mongoose.Schema({
  name : String,
  location : {
    city : String,
    country : String
  },
  description : String,
  rating : Number,
  reviews : [{
    user : Number,
    // user : {type : mongoose.Schema.Types.ObjectId, ref : "User"},
    text : String,
}],
});

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;