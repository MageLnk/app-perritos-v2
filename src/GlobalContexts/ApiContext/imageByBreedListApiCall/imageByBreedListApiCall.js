import apiCall from "../../../Utils/apiCall";

const imageByBreedListApiCall = (url) => {
  if (!url || typeof url !== "string") return "Invalid format";
  return apiCall({ url });
};

export default imageByBreedListApiCall;
