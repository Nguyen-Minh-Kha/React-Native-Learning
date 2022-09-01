import { TouchableOpacity } from "react-native-web";
import { StyleSheet, Text, View } from "react-native";
const Button = ({ action, children }) => {
  return (
    <TouchableOpacity onPress={action} style={style.button}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const style = StyleSheet.create({
  button: {
    backgroundColor: "royalblue",
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
    margin: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
