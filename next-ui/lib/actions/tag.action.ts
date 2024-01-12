"use server"


import { CreateTagParams } from "@/types";
import { handleError } from "../utils"
import {connectToDatabase} from '@/lib/databases'
import Tag from "../databases/models/tag.model";


export const createCategory = async ({ tagName }: CreateTagParams) => {
  try {
    await connectToDatabase();

    const newTag = await Tag.create({ name: tagName });

    return JSON.parse(JSON.stringify(newTag));
  } catch (error) {
    handleError(error)
  }
}

export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const tags = await Tag.find();

    return JSON.parse(JSON.stringify(tags));
  } catch (error) {
    handleError(error)
  }
}