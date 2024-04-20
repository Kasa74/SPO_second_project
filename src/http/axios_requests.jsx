import axios from "axios";

const API_URL = "http://localhost:5000/api/";

export const getHotels = async () => {
  const { data } = await axios({ url: `${API_URL}/hotel`, method: "GET" });
  return data;
};

export const getFlights = async () => {
  const { data } = await axios({ url: `${API_URL}/fly`, method: "GET" });
  return data;
};

export const getNews = async () => {
  const { data } = await axios({ url: `${API_URL}/news`, method: "GET" });
  return data;
};

export const postTicket = async (ticket) => {
  const { data } = await axios({
    url: `${API_URL}/ticket`,
    method: "POST",
    data: ticket,
  });
  return data;
};

export const postContacts = async (contacts) => {
  const { data } = await axios({
    url: `${API_URL}/contacts`,
    method: "POST",
    data: contacts,
  });
  return data;
};
