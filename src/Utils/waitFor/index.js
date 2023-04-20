const waitFor = (callback, time) => {
  if (typeof time !== "number") throw Error("Formato inválido");
  return setInterval(callback, time);
};

export { waitFor };
