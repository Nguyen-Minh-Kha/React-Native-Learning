import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Profil from "../Pages/Profil/Profil";
import Cam from "../Pages/Cam/Cam";
const Stack = createStackNavigator();

const ProfilStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.title,
      }}
    >
      <Stack.Screen
        name="profil"
        component={Profil}
        options={{ title: "Votre page de profil" }}
      />
      <Stack.Screen
        name="camera"
        component={Cam}
        options={{ title: "Prenez une photo" }}
      />
    </Stack.Navigator>
  );
};

export default ProfilStack;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "royalblue",
  },
  title: {
    color: "whitesmoke",
  },
});
