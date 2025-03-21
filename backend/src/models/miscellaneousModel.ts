import mongoose, { Error } from "mongoose";

export interface IMiscellaneous {
  openHours: string;
  maxGuestsPerTable: number;
  maxTable: number;
}

const miscellaneousSchema = new mongoose.Schema<IMiscellaneous>(
  {
    openHours: {
      type: String,
    },
    maxGuestsPerTable: {
      type: Number,
    },
    maxTable: {
      type: Number,
    },
  },
  {
    capped: { size: 1024 * 1024, max: 1 },
  }
);

const Miscellaneous = mongoose.model<IMiscellaneous>(
  "Miscellaneous",
  miscellaneousSchema
);

export default Miscellaneous;
