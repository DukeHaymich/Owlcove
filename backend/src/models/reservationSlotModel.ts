import mongoose from "mongoose";

const reservationSlotSchema = new mongoose.Schema({
  time: {
    type: String,
    required: true,
  },
});

const ReservationSlot = mongoose.model(
  "ReservationSlot",
  reservationSlotSchema
);

export default ReservationSlot;
