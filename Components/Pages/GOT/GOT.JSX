import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import * as WebBrowser from "expo-web-browser";

const GOT = () => {
  const [listPersos, setListPersos] = useState([]);
  const size = useWindowDimensions();
  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((reponse) => {
        /* console.log(reponse); */
        setListPersos(reponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /*   const config = {
    headers: { Authorization: `Bearer bKZS0Sk7QbIFnZLrOGX1` },
  };

  useEffect(() => {
    axios
      .get("https://the-one-api.dev/v2/character", config)
      .then((reponse) => {
        console.log(reponse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  const searchPerso = async (fullName) => {
    let res = await WebBrowser.openBrowserAsync(
      "https://www.google.com/search?q=" + fullName.replace(" ", "%20")
    );
    console.log(res);
  };

  return (
    <ScrollView style={styles.container}>
      {listPersos.map((perso, index) => {
        return (
          <TouchableOpacity
            key={perso.id}
            style={styles.persoContainer}
            onPress={() => {
              searchPerso(perso.fullName);
            }}
          >
            <Text style={styles.fullName}>{perso.fullName}</Text>
            <Image
              source={{ uri: perso.imageUrl }}
              style={{ width: size.width, height: size.width }}
            />
            <Text style={styles.title}>{perso.title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default GOT;

const styles = StyleSheet.create({
  container: {},
  persoContainer: {
    backgroundColor: "rgb(220,220,220)",
    padding: 20,
    margin: 20,
    borderBottomWidth: 2,
    borderColor: "royalblue",
    maxwidth: 500,
    alignSelf: "center",
    width: "100%",
  },
  image: {
    maxWidth: 500,
    maxHeight: 500,
    width: "100%",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: "purple",
  },
  fullName: {
    fontSize: 25,
    textAlign: "center",
    color: "royalblue",
  },
});
