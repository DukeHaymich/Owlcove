import mongoose from "mongoose";

export interface IReservation {
  name: string;
  phone: string;
  date: string;
  time: string;
  branch: string;
  customerCount: number;
  note?: string;
}

const reservationSchema = new mongoose.Schema<IReservation>({
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

const Reservation = mongoose.model<IReservation>(
  "reservation",
  reservationSchema
);

export default Reservation;
