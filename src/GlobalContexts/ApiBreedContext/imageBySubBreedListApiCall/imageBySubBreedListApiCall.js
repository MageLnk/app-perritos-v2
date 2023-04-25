import apiCall from "../../../Utils/apiCall";

const imageBySubBreedListApiCall = (url) => {
  if (!url || typeof url !== "string") return "Invalid format";
  return apiCall({ url });
};

export default imageBySubBreedListApiCall;
