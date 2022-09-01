import { TextInput, View, Text, Platform, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const InputWithError = ({
  holder,
  valeur,
  action,
  errorMessage,
  type,
  isPassword,
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const togglePasswordHidden = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <View style={style.container}>
      <View style={style.inputContainer}>
        <TextInput
          placeholder={holder}
          keyboardType={type}
          onChangeText={action}
          secureTextEntry={isPassword && isPasswordHidden}
          value={valeur}
          style={[style.input, { outline: "none" }]}
        ></TextInput>
        {isPassword && (
          <Feather
            name="eye"
            size={24}
            color="green"
            onPress={togglePasswordHidden}
          />
        )}
      </View>

      <Text style={style.error}>{errorMessage}</Text>
    </View>
  );
};

export default InputWithError;

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(255,255,255)",
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    fontSize: 17,
    padding: 10,
    width: "100%",
  },
  error: {
    color: "red",
  },
});
