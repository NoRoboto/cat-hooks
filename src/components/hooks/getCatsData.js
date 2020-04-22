import { useState, useEffect } from 'react';
import catRequest from "../../network/catRequest";

export default function useGetCatsData (requestId, catNumber) {
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    fetchCats();
  }, [requestId]);

  async function fetchCats () {
    const data = await catRequest(catNumber);
    setCatData(data);
  }

  return catData;
}