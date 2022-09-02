import {
  TextInput,
  View,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import { useContext, useState } from "react";
import Button from "../../Pages/UI/Button/Button";
import P from "../../Pages/UI/P/P";
import InputWithError from "../../Pages/UI/InputWithError/InputWithError.js";
import UserContext from "../../../Contexts/UserContext.js";

import createUser from "../../../libs/requests/auth";

import { AntDesign } from "@expo/vector-icons";

const Signup = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [passwordReInput, setPasswordReInput] = useState("");
  const [passwordReError, setPasswordReError] = useState("");

  const { user, setUser } = useContext(UserContext);

  const handleEmail = (text) => {
    setEmailInput(text);
    setEmailError("");
  };

  const handleUsername = (text) => {
    setUsernameInput(text);
    setUsernameError("");
  };

  const handlePassword = (text) => {
    setPasswordInput(text);
    setPasswordError("");
  };

  const handlePasswordRe = (text) => {
    setPasswordReInput(text);
    setPasswordReError("");
  };

  const signup = async () => {
    if (
      emailInput.includes("@") &&
      passwordInput.length >= 6 &&
      passwordReInput == passwordInput &&
      usernameInput.length >= 3 &&
      usernameInput.length <= 12
    ) {
      await createUser(emailInput, usernameInput, passwordInput);

      /* setUser({ email: emailInput, username: usernameInput }); */
    } else {
      setEmailError(!emailInput.includes("@") ? "email invalide!" : "");
      setUsernameError(
        usernameInput.length >= 3 && usernameInput.length <= 12
          ? ""
          : "username trop court"
      );
      setPasswordError(
        passwordInput.length < 6 ? "mot de passe trop court!" : ""
      );
      setPasswordReError(
        passwordInput == passwordReInput
          ? ""
          : "les mots de passes ne sont pas identiques !"
      );
    }
  };

  return (
    <View accessibilityRole={Platform.OS === "web" ? "form" : null}>
      <InputWithError
        holder="Email"
        valeur={emailInput}
        action={handleEmail}
        errorMessage={emailError}
        type="email-adress"
      />

      <InputWithError
        holder="Username"
        valeur={usernameInput}
        action={handleUsername}
        errorMessage={usernameError}
        type="default"
      />

      <InputWithError
        holder="Password"
        valeur={passwordInput}
        action={handlePassword}
        errorMessage={passwordError}
        type="default"
        isPassword
      />

      <InputWithError
        holder="Repeat password"
        valeur={passwordReInput}
        action={handlePasswordRe}
        errorMessage={passwordReError}
        type="default"
        isPassword
      />

      <Button action={signup}>
        <AntDesign name="adduser" size={24} color="white" />
        <P white={true} bold={true} outline={true}>
          Inscription
        </P>
      </Button>
    </View>
  );
};

export default Signup;
