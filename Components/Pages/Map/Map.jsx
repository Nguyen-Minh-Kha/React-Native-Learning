import { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { View, Text, StyleSheet } from "react-native";
import * as Location from "expo-location";

const Map = () => {
  const [location, setLocation] = useState({
    latitude: 48,
    longitude: 2,
    longitudeDelta: 10,
    latitudeDelta: 10,
  });

  useEffect(() => {
    (async () => {
      const permission = await Location.requestForegroundPermissionsAsync();

      if (permission.granted) {
        const userLocation = await Location.getCurrentPositionAsync({});

        setLocation({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
          longitudeDelta: 0.001,
          latitudeDelta: 0.001,
        });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation
        region={location}
        showsTraffic
        mapType="hybrid"
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});
export default Map;
