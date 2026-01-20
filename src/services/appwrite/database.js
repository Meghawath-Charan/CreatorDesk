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

  getContentsByStatus: (userId, status) =>
    databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [
        Query.equal("userId", userId),
        Query.equal("status", status),
        Query.orderDesc("createdAt"),
      ]
    ),

  updateContent: (documentId, data) =>
    databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      documentId,
      data
  ),

  deleteContent: (documentId) =>
    databases.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID,
      documentId
    ),

  getDocument: (documentId) =>
  databases.getDocument(
    DATABASE_ID,
    COLLECTION_ID,
    documentId
  ),


};

