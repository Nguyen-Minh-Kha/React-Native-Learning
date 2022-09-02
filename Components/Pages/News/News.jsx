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
import Button from "../UI/Button/Button";
import InputWithError from "../UI/InputWithError/InputWithError";

const News = () => {
  const [listNews, setListNews] = useState([]);
  const size = useWindowDimensions();

  const [input, setInput] = useState();

  const handleInput = (text) => {
    setInput(text);
  };

  let request =
    "https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=d81a12d645404484a12ea88b7ff4219a";

  useEffect(() => {
    axios
      .get(request)
      .then((reponse) => {
        console.log(reponse);
        setListNews(reponse.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const search = (text) => {
    request =
      "https://newsapi.org/v2/everything?q=" +
      text +
      "&apiKey=d81a12d645404484a12ea88b7ff4219a";
    console.log(request);
    axios
      .get(request)
      .then((reponse) => {
        console.log(reponse);
        setListNews(reponse.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <InputWithError
        holder={"Entrez votre recherche ici"}
        valeur={input}
        action={handleInput}
        type="default"
      />
      <Button
        action={() => {
          search(input);
        }}
      >
        <Text style={{ color: "white" }}>Rechercher</Text>
      </Button>

      {listNews.map((article, index) => {
        return (
          <TouchableOpacity
            key={article.id}
            style={styles.newsContainer}
            onPress={() => {}}
          >
            <Text style={styles.title}>{article.title}</Text>
            <Image
              source={{ uri: article.urlToImage }}
              style={{ width: size.width, height: size.width }}
            />
            <Text style={styles.author}>{article.author}</Text>
            <Text>{article.description}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {},
  newsContainer: {
    backgroundColor: "rgb(220,220,220)",
    padding: 20,
    margin: 20,
    borderBottomWidth: 2,
    borderColor: "royalblue",
    maxwidth: 500,
    alignSelf: "center",
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "purple",
  },
  author: {
    fontSize: 25,
    color: "royalblue",
  },
});
