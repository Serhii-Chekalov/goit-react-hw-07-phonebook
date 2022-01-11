import axios from "axios";

axios.defaults.baseURL = "https://61d963d4ce86530017e3cad4.mockapi.io";

export async function fetchAllContacts() {
  const response = await axios.get("/contacts");
  return response;
}

export async function postContact({ name, number }) {
  return await axios({
    method: "post",
    url: "/contacts",
    data: {
      name,
      number,
    },
  });
}

export async function deleteContactById(id) {
  return await axios({
    method: "delete",
    url: `/contacts/${id}`,
  });
}
