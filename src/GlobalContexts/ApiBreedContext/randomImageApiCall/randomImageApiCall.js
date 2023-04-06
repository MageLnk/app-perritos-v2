import apiCall from "../../../Utils/apiCall";

const randomImageApiCall = (url) => {
  if (!url || typeof url !== "string") return "Invalid format";
  return apiCall({ url });
};

export default randomImageApiCall;
