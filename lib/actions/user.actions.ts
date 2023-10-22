"use server";

import User from "@/database/user.model";
import { connectToDb } from "../mongoose";
export const getUserById = async (params: any): Promise<any> => {
  try {
    connectToDb();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
