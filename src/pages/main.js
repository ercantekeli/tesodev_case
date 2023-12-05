import React, { useState, useEffect } from "react";
import { Input } from "../components/Input";
import Button from "../components/Button";
import Logo from "../assets/logo";
import Footer from "../components/Footer";
const Main = () => {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <Button buttonName="Add new record" />
      <Logo />
      <Input
        label="deneme"
        placeholder="Placeholder"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Footer/>
    </div>
  );
};

export default Main;
