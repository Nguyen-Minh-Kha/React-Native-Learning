import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { useRef, useState, useContext } from "react";
import { ActivityIndicator } from "react-native-web";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import UserContext from "../../../Contexts/UserContext.js";

const Cam = ({ route, navigation }) => {
  const [type, setType] = useState(CameraType);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const camRef = useRef();
  const size = useWindowDimensions();

  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const toggleCameraType = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  };

  const takePicture = async () => {
    /* const ratio = await camRef.current.getSupportedRatioAsync();
    console.log(ratio); */

    const image = await camRef.current.takePictureAsync();
    console.log(image);

    setUser({ ...user, avatar: image });

    navigation.pop();
  };

  console.log(permission);
  if (!permission) {
    requestPermission();
  }
  if (permission && permission.status == "undetermined") {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={100} color="green" />
      </View>
    );
  }
  if (permission && !permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Permission refusée</Text>
        <Feather name="camera-off" size={100} color="red" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Camera
          type={type}
          ratio="4:3"
          ref={camRef}
          style={{ width: (size.width * 3) / 4, height: size.width }}
        >
          <View style={styles.iconscontainer}>
            <TouchableOpacity onPress={toggleCameraType}>
              <MaterialIcons
                name="flip-camera-android"
                size={50}
                color="green"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={takePicture}>
              <MaterialIcons name="camera" size={50} color="red" />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  text: {
    color: "red",
    fontSize: 25,
  },
  iconscontainer: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    position: "absolute",
    bottom: 50,
    width: "75%",
    alignSelf: "center",
    borderRadius: 5,
  },
});

export default Cam;
