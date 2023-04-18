const cleanInput = (word) => {
  if (typeof word !== "string") throw Error("Formato inválido");
  const toLowerCaseWord = word.toLowerCase();
  const cleanedWord = toLowerCaseWord.replace(/[^a-z]/g, "");
  if (!cleanedWord) throw Error("Formato inválido");
  return cleanedWord;
};

export default cleanInput;
