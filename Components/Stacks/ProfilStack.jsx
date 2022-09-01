import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Profil from "../Pages/Profil/Profil";
import Cam from "../Pages/Cam/Cam";
import EditInfo from "../Pages/EditInfo/EditInfo";
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

      <Stack.Screen
        name="editProfil"
        component={EditInfo}
        options={{ title: "Modifier vos informations" }}
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
