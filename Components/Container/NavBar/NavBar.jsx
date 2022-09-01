import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import UserContext from "../../../Contexts/UserContext";
const Navbar = ({ navigation, options }) => {
  const { user, setUser } = useContext(UserContext);

  function logout() {
    setUser(null);
  }

  return (
    <View
      style={[
        styles.container,
        { paddingTop: Platform.OS !== "web" ? 45 : 20 },
      ]}
    >
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <AntDesign name="menu-fold" size={35} color="whitesmoke" />
      </TouchableOpacity>
      <Text style={styles.title}>{options.title}</Text>
      <TouchableOpacity onPress={logout}>
        <AntDesign name="logout" size={35} color="whitesmoke" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(40, 40, 90)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  title: {
    color: "whitesmoke",
    fontSize: 20,
  },
});

export default Navbar;
