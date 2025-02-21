import { Request, Response } from "express";
import Miscellaneous from "../models/miscellaneousModel";

async function getAll(request: Request, response: Response) {
  try {
    let miscellaneous = await Miscellaneous.findOne({});
    if (!miscellaneous) {
      miscellaneous = await Miscellaneous.create({
        openHours: "",
        maxGuestsPerTable: 3,
        maxTable: 3,
      });
    }
    response.status(200).json(miscellaneous);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function updateMaxTable(request: Request, response: Response) {
  try {
    const { maxTable } = request.body;
    const miscellaneous = await Miscellaneous.findOneAndUpdate(
      {},
      { maxTable },
      { new: true, upsert: true }
    );
    response.status(200).json(miscellaneous);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function updateMaxGuestsPerTable(request: Request, response: Response) {
  try {
    const { maxGuestsPerTable } = request.body;
    const miscellaneous = await Miscellaneous.findOneAndUpdate(
      {},
      { maxGuestsPerTable },
      { new: true, upsert: true }
    );
    response.status(200).json(miscellaneous);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function updateOpenHours(request: Request, response: Response) {
  try {
    const { openHours } = request.body;
    const miscellaneous = await Miscellaneous.findOneAndUpdate(
      {},
      { openHours },
      { new: true, upsert: true }
    );
    response.status(200).json(miscellaneous);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

async function updateAll(request: Request, response: Response) {
  try {
    const { openHours, maxGuestsPerTable, maxTable } = request.body;
    const miscellaneous = await Miscellaneous.findOneAndUpdate(
      {},
      { openHours, maxGuestsPerTable, maxTable },
      { new: true, upsert: true }
    );
    response.status(200).json(miscellaneous);
  } catch (err: any) {
    response.status(500).json({ message: err.message });
  }
}

export default {
  getAll,
  updateMaxTable,
  updateMaxGuestsPerTable,
  updateOpenHours,
  updateAll,
};
