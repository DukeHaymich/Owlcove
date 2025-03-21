import { Request, Response } from "express";
import mongoose from "mongoose";
import ReservationSlot from "../models/reservationSlotModel";
import Reservation from "../models/reservationModel";

async function postReservation(request: Request, response: Response) {
  try {
    const reservation = request.body;
    response.status(200).json(reservation);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function getReservationByDate(request: Request, response: Response) {
  try {
    const date = new Date(request.params.date as string);
    const reservation = await Reservation.find({ date: date });
    response.status(200).json(reservation);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function getSlots(request: Request, response: Response) {
  try {
    const slots = await ReservationSlot.find({});
    // Data flattening & sorting
    const returnSlots = slots
      .map((slot: any) => {
        return slot.time;
      })
      .sort(
        (a, b) =>
          new Date("1/1/2000 " + a).valueOf() -
          new Date("1/1/2000 " + b).valueOf()
      );
    response.status(200).json(returnSlots);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function postSlots(request: Request, response: Response) {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    await ReservationSlot.deleteMany({}, { session: session });
    const slots = request.body.map((slot: any) => {
      return {
        time: slot,
      };
    });
    const reservationSlots = await ReservationSlot.insertMany(slots, {
      session: session,
    });
    await session.commitTransaction();
    response
      .status(200)
      .json({ message: "Slots created/overrided successfully!" });
  } catch (err: any) {
    await session.abortTransaction();
    response.status(500).json({ message: err.message });
  }
}

export default {
  postReservation,
  getReservationByDate,
  getSlots,
  postSlots,
};
