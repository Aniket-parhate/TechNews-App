import react from "react";
import { View, Text, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchBar from "../components/SearchBar";
import { StyleSheet } from "react-native";
import { useState } from "react";
import axios from "axios";
import Article from "../components/Article";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [articles, setArticles] = useState([]);

  const SearchArticles = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=7ac9f4b2314240eca53798fd5b490d21",
        {
          params: {
            category: "technology",
            q: searchText,
          },
        }
      )
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={SearchArticles}
      />
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.sourceName}
          />
        )}
        keyExtractor={(item) => item.title}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default SearchScreen;
