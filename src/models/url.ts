import { Schema, Document, model } from "mongoose";

export interface IUrlDocument extends Document {
  urlId: string;
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  date: Date;
  expireTime: Date;
}

const UrlSchema = new Schema(
  {
    urlId: {
      type: String,
      required: true,
    },
    originalUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    expireTime:{
      type: Date,
      default: null
    }
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

let Url = model<IUrlDocument>("Url", UrlSchema);

export default Url;
