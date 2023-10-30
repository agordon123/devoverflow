import { Schema, models, model, Document } from "mongoose";

export interface IAnswer extends Document {
  content: string;
  upvotes: Schema.Types.ObjectId[]; // array of user ids
  downvotes: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId;
  question: Schema.Types.ObjectId;
  createdAt: Date;
}
const AnswerSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  content: { type: String, required: true },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

export const Answer = models.Answer || model<IAnswer>("Answer", AnswerSchema);
