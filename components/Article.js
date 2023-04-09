import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import moment from "moment/moment";
import * as WebBrowser from "expo-web-browser";
import { Pressable } from "react-native";

const Article = (props) => {
  const goToSource = () => {
    WebBrowser.openBrowserAsync(props.url);
  };

  return (
    <Pressable style={styles.container} onPress={goToSource}>
      <Image
        source={{
          uri: props.urlToImage,
        }}
        style={styles.image}
      />
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>

        <View style={styles.data}>
          <Text style={styles.heading}>
            by: <Text style={styles.author}>{props.author}</Text>
          </Text>
          <Text style={styles.date}>
            {moment(props.publishedAt).format("MMM Do YY")}
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>
            source: <Text style={styles.source}>{props.sourceName}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 12,
    marginTop: 20,

    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: "#fff",
  },
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {},
  author: {
    fontWeight: "bold",
    fontSize: 15,
  },
  date: {
    fontWeight: "bold",
    color: "#06d6a0",
    fontSize: 15,
  },
  source: {
    fontWeight: "bold",
    color: "#06d6a0",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Article;
