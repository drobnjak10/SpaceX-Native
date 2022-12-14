import * as React from "react";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import LinkButton from "./LinkButton";

function Rocket({ item }) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <LinkButton url={item.wikipedia} title={"Open for more"} />
      </View>
      <Image
        style={styles.image}
        source={{
          uri: "https://i.imgur.com/DaCfMsj.jpg",
        }}
      />
    </View>
  );
}

export default Rocket;

const styles = StyleSheet.create({
  card: {
    //flex: 1,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    padding: 20,
    marginTop: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    //width: "50%",
  },
});
