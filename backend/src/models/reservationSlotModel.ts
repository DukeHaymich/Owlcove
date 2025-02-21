import mongoose from "mongoose";

export interface IReservationSlot {
  time: string;
}

const reservationSlotSchema = new mongoose.Schema<IReservationSlot>({
  time: {
    type: String,
    required: true,
  },
});

const ReservationSlot = mongoose.model<IReservationSlot>(
  "ReservationSlot",
  reservationSlotSchema
);

export default ReservationSlot;
