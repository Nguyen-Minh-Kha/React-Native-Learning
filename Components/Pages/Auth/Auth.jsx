import { StyleSheet, Text, View } from "react-native";
import Card from "../../HOC/Card/Card";
import { useState } from "react";
import Login from "../../Container/Login/Login";
import Signup from "../../Container/Login/Signup";
import { TouchableOpacity } from "react-native-web";

const Auth = () => {
  const [isLogin, setIsLoging] = useState(true);

  const toggleLogin = () => {
    setIsLoging(!isLogin);
  };

  return (
    <View style={styles.container}>
      <Card
        title="Bienvenue!"
        content={
          isLogin ? "Veuillez vous connecter!" : "Veuillez vous inscrire!"
        }
      >
        {isLogin ? <Login /> : <Signup />}

        <TouchableOpacity>
          <Text onPress={toggleLogin}>
            {isLogin
              ? "Pas encore membre, inscrivez vous !"
              : "Déjà membre ? Connectez-vous !"}
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    maxWidth: 700,
  },
});

export default Auth;
