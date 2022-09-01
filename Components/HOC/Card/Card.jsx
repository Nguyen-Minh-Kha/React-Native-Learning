import { StyleSheet, Text, View } from "react-native";
//HOC: HIGH ORDER COMPONENT.
export default function Card({ title: titre, content, children }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>{titre}</Text>
      <Text style={[styles.text]}>{content}</Text>
      <View style={styles.childrenContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "royalblue",
    width: "100%",
    borderRadius: 5,
  },
  text: {
    color: "whitesmoke",
    textAlign: "center",
    fontSize: 20,
    padding: 5,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 5,
  },
  childrenContainer: {
    backgroundColor: "whitesmoke",
    padding: 20,
  },
});
