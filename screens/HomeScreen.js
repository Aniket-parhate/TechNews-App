import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import Article from "../components/Article";
import axios from "axios";

const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=7ac9f4b2314240eca53798fd5b490d21",
        {
          params: {
            category: "technology",
          },
        }
      )
      .then((response) => {
        console.log(response.data.articles);
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
            url={item.url}
          />
        )}
        keyExtractor={(item) => item.title}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
