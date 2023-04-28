import listAllBreedsApiCall from "../../services/listAllBreedsApiCall/listAllBreedsApiCall";
import transformIntoArray from "../transformIntoArray";
//
const urlListAllBreeds = "https://dog.ceo/api/breeds/list/all";
//
const getListBreeds = async () => {
  const { message } = await listAllBreedsApiCall(urlListAllBreeds);
  if (!message) throw Error("La API se cayó");

  return transformIntoArray(message);
};

export default getListBreeds;
