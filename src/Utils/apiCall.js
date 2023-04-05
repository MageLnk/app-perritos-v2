const apiCall = async ({ url, method = "get", body, headers }) => {
  // Podría poner el const para destructurar acá, pero, worth it?
  if (!url || typeof url !== "string") return "Invalid format";
  try {
    const response = await fetch(url, { method, body, headers });
    const data = await response.json();

    return data;
  } catch (error) {
    //console.log("FDSAFASFADSF", error);
    return error;
  }
};

export default apiCall;
