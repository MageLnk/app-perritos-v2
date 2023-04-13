const apiCall = async ({ url, method = "get", body, headers } = "") => {
  if (!url || typeof url !== "string") return "Invalid format";
  try {
    const response = await fetch(url, { method, body, headers });
    const data = await response.json();
    if (!data) throw new Error("Error al contactar la API");

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default apiCall;
