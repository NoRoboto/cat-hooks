import {baseUrl, searchTypeRequest} from "./constants";
import apiKey from './apiKey';

export default async (limitValue) => {
  const query = `?limit=${limitValue}&format=json&order=random&size=med`;
  const response = await fetch(`${baseUrl}${searchTypeRequest}${query}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-api-key": apiKey,
    },
  });
  const data = await response.json();
  return data;
};
