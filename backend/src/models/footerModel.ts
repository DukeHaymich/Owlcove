import mongoose from "mongoose";

interface ILocation {
  address: string;
  phone: string;
}

interface IMedia {
  icon: string;
  name: string;
  url: string;
}

export interface IFooter {
  locations: ILocation[];
  media: IMedia[];
}

const locationSchema = new mongoose.Schema<ILocation>({
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const mediaSchema = new mongoose.Schema<IMedia>({
  icon: {
    type: String,
  },
  name: {
    type: String,
  },
  url: {
    type: String,
  },
});

const footerSchema = new mongoose.Schema<IFooter>(
  {
    locations: {
      type: [locationSchema],
    },
    media: {
      type: [mediaSchema],
    },
  },
  { capped: { size: 1024 * 1024 * 5, max: 1 } }
);

const Footer = mongoose.model<IFooter>("Footer", footerSchema);

export default Footer;
