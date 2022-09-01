import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilStack from "../Stacks/ProfilStack";
import Navbar from "../Container/Navbar/Navbar";
const Drawer = createDrawerNavigator();

export default function GlobalDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: Navbar,
      }}
    >
      <Drawer.Screen
        name="profilstack"
        component={ProfilStack}
        options={{
          title: "Page de profil",
        }}
      />
    </Drawer.Navigator>
  );
}
