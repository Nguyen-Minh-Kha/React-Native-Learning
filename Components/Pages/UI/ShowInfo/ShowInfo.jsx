import { Text, View, StyleSheet } from "react-native";

const ShowInfo = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

export default ShowInfo;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "rgb(20,20,20)",
    padding: 5,
    maxWidth: 300,
    alignSelf: "center",
    width: "100%",
  },
  text: {},
  title: {
    fontWeight: "bold",
  },
});
