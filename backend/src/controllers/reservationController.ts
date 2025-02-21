import { Request, Response } from "express";
import mongoose from "mongoose";
import ReservationSlot from "../models/reservationSlotModel";
import Reservation from "../models/reservationModel";
import {
  getOccupiedSlotCount,
  getSlotsMetaData,
} from "../services/reservation";
import { miscellaneous } from "../data/miscellaneous";

async function post(request: Request, response: Response) {
  try {
    /// TODO: validate request's body
    // Check for slot availability
    const occupiedSlotCount = await getOccupiedSlotCount(
      request.body.date,
      request.body.time,
      request.body.branch
    );
    if (occupiedSlotCount >= miscellaneous.maxTable) {
      response.status(400).json({ message: "Out of table for this time" });
      return;
    }
    // Create a reservation
    const reservation = await Reservation.create(request.body);
    response
      .status(200)
      .json({ message: "Reservation created successfully", data: reservation });
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function getByDateAndBranch(request: Request, response: Response) {
  try {
    const { date, branch } = request.query;
    const reservation = await Reservation.find({ date: date, branch: branch });
    response.status(200).json(reservation);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function getSlots(_: Request, response: Response) {
  try {
    const slotData = await getSlotsMetaData();
    response.status(200).json(slotData);
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
    response.status(200).json({
      message: "Slots created/overrided successfully!",
      data: reservationSlots,
    });
  } catch (err: any) {
    await session.abortTransaction();
    response.status(500).json({ message: err.message });
  }
}

export default {
  post,
  getByDateAndBranch,
  getSlots,
  postSlots,
};
