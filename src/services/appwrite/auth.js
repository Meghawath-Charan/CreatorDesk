import { Account } from "appwrite";
import client from "./client";

const account = new Account(client);

export const authService = {
  signup: (email, password, name) =>
    account.create("unique()", email, password, name),

  login: (email, password) =>
    account.createEmailPasswordSession(email, password),

  logout: () =>
    account.deleteSession("current"),

  getCurrentUser: () =>
    account.get(),
};
