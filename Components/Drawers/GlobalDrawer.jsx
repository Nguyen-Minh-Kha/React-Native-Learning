import { createDrawerNavigator } from "@react-navigation/drawer";
import GOT from "../Pages/GOT/GOT";
import Map from "../Pages/Map/Map";
import News from "../Pages/News/News";
import ProfilStack from "../Stacks/ProfilStack";
import Navbar from "./../Container/NavBar/NavBar";
const Drawer = createDrawerNavigator();

export default function GlobalDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props) => {
          return <Navbar {...props} />;
        },
      }}
    >
      <Drawer.Screen name="news" component={News} options={{ title: "News" }} />
      <Drawer.Screen
        name="profilstack"
        component={ProfilStack}
        options={{
          title: "Page de profil",
        }}
      />
      <Drawer.Screen
        name="map"
        component={Map}
        options={{
          title: "Carte",
        }}
      />
      <Drawer.Screen
        name="got"
        component={GOT}
        options={{ title: "Personnages de GOT" }}
      />
    </Drawer.Navigator>
  );
}
