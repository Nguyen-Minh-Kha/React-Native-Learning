import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import UserContext from "../../../Contexts/UserContext.js";
import { useContext, useState } from "react";
import defaultAvatar from "../../../assets/default_avatar.png";
import ShowInfo from "../UI/ShowInfo/ShowInfo.jsx";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Button from "../UI/Button/Button.jsx";

const Profil = ({ route, navigation }) => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const size = useWindowDimensions();

  const pickImage = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    setUser({ ...user, avatar: image });
  };

  const goCamera = () => {
    navigation.push("camera");
  };

  const goEdit = () => {
    navigation.push("editProfil");
    console.log("toto");
  };
  return (
    <>
      <View style={styles.avatarContainer}>
        <Image
          source={user.avatar ? user.avatar : defaultAvatar}
          style={[
            styles.avatar,
            {
              width: size.width,
              height: size.height,
              maxWidth: 300,
              maxHeight: 300,
            },
          ]}
        />
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <MaterialIcons
              name="photo-library"
              size={24}
              color="black"
              onPress={pickImage}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons
              name="photo-camera"
              size={24}
              color="black"
              onPress={goCamera}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container}>
        <ShowInfo title="Email" content={user.email} />
        <ShowInfo title="Username" content={user.username} />
        <ShowInfo
          title="Description"
          content={
            user.description
              ? user.description
              : "Veuillez entrer une description"
          }
        />
        <Button action={goEdit}>
          <Text style={styles.text}>Modifier vos informations.</Text>
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "rgba(10, 10, 10, 0.1)",
    maxWidth: 300,
    alignSelf: "center",
    width: "100%",
  },
  container: {
    backgroundColor: "rgb(220, 220, 220)",
    padding: 20,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "royalblue",
    maxWidth: 300,
    alignSelf: "center",
    width: "100%",
  },
  avatarContainer: {},
  avatar: { alignSelf: "center" },
  text: {
    color: "white",
  },
});

export default Profil;
