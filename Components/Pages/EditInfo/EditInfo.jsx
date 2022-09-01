import { Text, View, StyleSheet } from "react-native";
import InputWithError from "../UI/InputWithError/InputWithError";
import UserContext from "../../../Contexts/UserContext.js";
import { useState, useContext } from "react";
import Button from "../UI/Button/Button";
import Card from "../../HOC/Card/Card";

const EditInfo = ({ route, navigation }) => {
  const { user, setUser } = useContext(UserContext);
  const [emailInput, setEmailInput] = useState(user.email);
  const [emailError, setEmailError] = useState("");

  const [usernameInput, setUsernameInput] = useState(user.username);
  const [usernameError, setUsernameError] = useState("");

  const [descInput, setDescInput] = useState(user.description);

  const handleEmail = (text) => {
    setEmailInput(text);
    setEmailError("");
  };

  const handleUsername = (text) => {
    setUsernameInput(text);
    setUsernameError("");
  };

  const handleDesc = (text) => {
    setDescInput(text);
  };

  const editInfo = () => {
    if (
      emailInput.includes("@") &&
      usernameInput.length >= 3 &&
      usernameInput.length <= 12
    ) {
      setUser({
        ...user,
        email: emailInput,
        username: usernameInput,
        description: descInput,
      });
      navigation.pop();
    } else {
      setEmailError(!emailInput.includes("@") ? "email invalide!" : "");
      setUsernameError(
        usernameInput.length >= 3 && usernameInput.length <= 12
          ? ""
          : "username trop court"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Card title={"Modifier"} content={"vos informations"} />
      <InputWithError
        holder={user.email}
        valeur={emailInput}
        action={handleEmail}
        errorMessage={emailError}
        type="email-adress"
      />
      <InputWithError
        holder={user.username}
        valeur={usernameInput}
        action={handleUsername}
        errorMessage={usernameError}
        type="default"
      />
      <InputWithError
        holder={user.description ? user.description : "Description"}
        valeur={descInput}
        action={handleDesc}
        type="default"
      />
      <Button action={editInfo}>
        <Text style={styles.text}>Modifier vos informations.</Text>
      </Button>
    </View>
  );
};

export default EditInfo;

const styles = StyleSheet.create({
  container: {},
  text: {
    color: "white",
  },
});
