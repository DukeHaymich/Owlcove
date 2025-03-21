import Reservation from "../models/reservationModel";
import ReservationSlot from "../models/reservationSlotModel";

async function getSlotsMetaData() {
  const slots = await ReservationSlot.find({});
  // Data flattening & sorting
  return slots
    .map((slot: any) => {
      return slot.time;
    })
    .sort(
      (a, b) =>
        new Date("1/1/2000 " + a).valueOf() -
        new Date("1/1/2000 " + b).valueOf()
    );
}

async function getOccupiedSlotCount(
  date: string,
  time: string,
  branch: string
) {
  const slotsData = await getSlotsMetaData();
  // Count previous slot and current slot
  const slotIndex = slotsData.findIndex((value) => value === time);
  const lookUpTimeSlots = slotsData.slice(
    Math.max(slotIndex - 1, 0),
    slotIndex + 1
  );
  return await Reservation.countDocuments({
    date: date,
    time: { $in: lookUpTimeSlots },
    branch: branch,
  });
}

export { getSlotsMetaData, getOccupiedSlotCount };
