import { useEffect, useContext } from 'react';
import catRequest from "../network/catRequest";
import { GlobalContext } from '../context/GlobalState';

export default function useGetCatsData (requestId, catNumber) {
  const { cats, fetchCats } = useContext(GlobalContext);

  useEffect(() => {
    getCat();
  }, [requestId]);

  async function getCat () {
    const data = await catRequest(catNumber);

    fetchCats(data);
  }

  return cats;
}