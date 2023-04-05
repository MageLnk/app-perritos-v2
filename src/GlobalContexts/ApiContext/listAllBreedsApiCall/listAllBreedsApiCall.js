import apiCall from "../../../Utils/apiCall";

const listAllBreedsApiCall = (url) => {
  if (!url || typeof url !== "string") return "Invalid format";
  return apiCall({ url });
};

export default listAllBreedsApiCall;
