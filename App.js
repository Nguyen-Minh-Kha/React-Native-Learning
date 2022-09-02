import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./Components/Pages/Auth/Auth";
import UserContext from "./Contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import GlobalDrawer from "./Components/Drawers/GlobalDrawer";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "./libs/requests/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function App() {
  //const fakeUser = { email: "test@example.com", username: "test" };
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const ref = doc(firestore, "users", firebaseUser.uid);
        let data = getDoc(ref).then((reponse) => {
          const infos = reponse.data();
          console.log(infos);
          setUser({ ...firebaseUser, ...infos });
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <NavigationContainer>
        <View style={styles.container}>
          {user ? <GlobalDrawer /> : <Auth />}

          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {},
});
