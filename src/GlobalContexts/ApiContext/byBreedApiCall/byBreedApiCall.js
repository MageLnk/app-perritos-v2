import apiCall from "../../../Utils/apiCall";

const byBreedApiCall = (url) => {
  if (!url || typeof url !== "string") return "Invalid format";
  return apiCall({ url });
};

export default byBreedApiCall;
