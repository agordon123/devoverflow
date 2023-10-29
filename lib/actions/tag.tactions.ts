"use server";

import { connectToDb } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag from "@/database/tags.model";
import User from "@/database/user.model";

export const getTopInteractedTags = async (
  params: GetTopInteractedTagsParams
) => {
  try {
    connectToDb();
    const { userId } = params;
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    // eslint-disable-next-line no-unused-vars
    const tags = await Tag.find({}).sort({ createdAt: -1 });
    return [
      { _id: "1", name: "tag1" },
      { _id: "2", name: "tag2" },
    ];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export async function getAllTags(params: GetAllTagsParams) {
  try {
    connectToDb();
    // eslint-disable-next-line no-unused-vars
    const { page, pageSize, searchQuery, filter } = params;
    const tags = await Tag.find({});
    return { tags };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
