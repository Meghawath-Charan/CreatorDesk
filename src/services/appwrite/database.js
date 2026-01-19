import { Databases, ID, Query } from "appwrite";
import client from "./client";

const databases = new Databases(client);

const DATABASE_ID = "696dc9ac003852b0bb49";
const COLLECTION_ID = "contents";

export const contentService = {
  createContent: ({ title, description, type, status, userId }) =>
    databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        title,
        description,
        type,
        status,
        userId,
        createdAt: new Date().toISOString(),
      }
    ),

  getUserContents: (userId) =>
    databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.equal("userId", userId)]
    ),
};
