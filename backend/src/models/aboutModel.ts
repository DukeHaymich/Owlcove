import mongoose from "mongoose";

interface INumericItem {
  prefix: string;
  suffix: string;
  numericData: number;
  animated: boolean;
  prefixNumericData: string;
  suffixNumericData: string;
}

export interface IAbout {
  numericSummary: INumericItem[];
}

const numericItemSchema = new mongoose.Schema<INumericItem>({
  prefix: {
    type: String,
  },
  suffix: {
    type: String,
  },
  numericData: {
    type: Number,
  },
  animated: {
    type: Boolean,
  },
  prefixNumericData: {
    type: String,
  },
  suffixNumericData: {
    type: String,
  },
});

const aboutSchema = new mongoose.Schema<IAbout>(
  {
    numericSummary: {
      type: [numericItemSchema],
    },
  },
  {
    capped: { size: 1024 * 1024 * 10, max: 1 },
  }
);

const About = mongoose.model<IAbout>("About", aboutSchema);

export default About;
