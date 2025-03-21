import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  phone: {
    type: String,
    required: [true, "Please add a phone"],
  },
  date: {
    type: String,
    required: [true, "Please add a date"],
  },
  time: {
    type: String,
    required: [true, "Please add a time"],
  },
  branch: {
    type: String,
    required: [true, "Please add a branch"],
  },
  customerCount: {
    type: Number,
    required: [true, "Please add a customerCount"],
  },
  note: {
    type: String,
  },
});

const Reservation = mongoose.model("reservation", reservationSchema);

export default Reservation;
