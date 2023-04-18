const waitFor = (callback, time) => {
  return setInterval(callback, time);
};

export { waitFor };
