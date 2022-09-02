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
import { AntDesign } from "@expo/vector-icons";
import InputWithError from "../../Pages/UI/InputWithError/InputWithError.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../libs/requests/firebase";
import UserContext from "../../../Contexts/UserContext";

const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passWordInput, setPasswordInput] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { user, setUser } = useContext(UserContext);

  const handleEmail = (text) => {
    setEmailInput(text);
    setEmailError("");
  };

  const handlePassword = (text) => {
    setPasswordInput(text);
    setPasswordError("");
  };

  const login = async () => {
    if (emailInput.includes("@") && passWordInput.length >= 6) {
      /* console.log(emailInput + ", connexion reussi"); */

      signInWithEmailAndPassword(auth, emailInput, passWordInput)
        .then((userCredential) => {
          setUser(userCredential.user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      setEmailError(!emailInput.includes("@") ? "email invalide!" : "");
      setPasswordError(
        passWordInput.length < 6 ? "mot de passe trop court!" : ""
      );
    }
  };

  const isPassword = true;

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
        holder="Password"
        valeur={passWordInput}
        action={handlePassword}
        errorMessage={passwordError}
        type="default"
        isPassword
      />

      <Button action={login}>
        <AntDesign name="login" size={24} color="white" />
        <P white={true} bold={true} outline={true}>
          Se connecter
        </P>
      </Button>
    </View>
  );
};

export default Login;
