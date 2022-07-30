import * as React from "react";
import {
  FlatList,
  SafeAreaView, StyleSheet
} from "react-native";
import Crew from "../components/Crew";
import { ICrew } from "../interfaces";

function CrewMembers() {
  const [data, setData] = React.useState<ICrew[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/crew");
      const data = await response.json();
      setData(data);
    } catch {}
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Crew item={item} id={item.id} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

export default CrewMembers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
