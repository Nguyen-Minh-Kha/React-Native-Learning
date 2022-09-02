import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import React from "react";
import axios from "axios";

const GOT = () => {
  const [listPersos, setListPersos] = useState();

  useEffect(() => {
    axios
      .get("https://thronesapi.com/api/v2/Characters")
      .then((reponse) => {
        console.log(reponse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Text>GOT</Text>
    </View>
  );
};

export default GOT;

const styles = StyleSheet.create({});
