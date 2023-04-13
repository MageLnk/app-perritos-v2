import { useState } from "react";

// Styles
import { Input } from "antd";
const { Search } = Input;

// App
const InputBreed = () => {
  const [breed, setBreed] = useState("");

  const onInputChange = (event) => {
    setBreed(event.target.value);
  };

  const onInputSearch = (value) => {
    console.log(`El value es ${value}`);
    console.log("Ahora limpiamos");
    setBreed("");
  };

  return <Search onSearch={onInputSearch} onChange={onInputChange} value={breed} placeholder="Write a breed" />;
};

export default InputBreed;
