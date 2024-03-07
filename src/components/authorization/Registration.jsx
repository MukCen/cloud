import React, { useState } from "react";
import "./authorization.css";
import Input from "../input/Input";
import { registration } from "../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='authorization'>
      <div className='authorization__header'>Реєстрація</div>
      <Input
        value={email}
        setValue={setEmail}
        type='text'
        placeholder='Введіть email...'
      />
      <Input
        value={password}
        setValue={setPassword}
        type='password'
        placeholder='Ввведіть пароль...'
      />
      <button
        onClick={() => registration(email, password)}
        className='authorization__btn'>
        Зареєструватись
      </button>
    </div>
  );
};

export default Registration;
