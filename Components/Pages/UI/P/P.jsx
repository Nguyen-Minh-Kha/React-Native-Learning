import { Text, StyleSheet } from "react-native";

const P = ({ white, bold, outline, children }) => {
  return (
    <Text
      style={[
        {
          color: white ? "whitesmoke" : "black",
          fontWeight: bold ? "bold" : null,
          borderBottomWidth: outline ? 1 : 0,
        },
        style.text,
      ]}
    >
      {children}
    </Text>
  );
};

export default P;

const style = StyleSheet.create({
  text: {
    marginHorizontal: 5,
    fontSize: 15,
  },
});
