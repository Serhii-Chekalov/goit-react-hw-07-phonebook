import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllContacts, postContact, deleteContactById } from "../../Api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchAllContacts();
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  "contacts/postContact",
  async (userObj, { rejectWithValue }) => {
    try {
      const { data } = await postContact(userObj);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      await deleteContactById(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
