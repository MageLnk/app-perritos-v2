import apiCall from "../../../Utils/apiCall";

const listAllSubBreedsApiCall = (url) => {
  if (!url || typeof url !== "string") return "Invalid format";
  return apiCall({ url });
};

export default listAllSubBreedsApiCall;
