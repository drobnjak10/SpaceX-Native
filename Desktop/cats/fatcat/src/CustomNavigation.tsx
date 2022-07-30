import { createStackNavigator } from "@react-navigation/stack";
import CrewMember from "./screens/CrewMember";
import CrewMembers from "./screens/CrewMembers";
import "react-native-gesture-handler";
import React from "react";
import { ICrew } from "./interfaces";


export type RootStackParamList = {
  CrewMembers: undefined;
  CrewMember: {item: ICrew};
};
const Stack = createStackNavigator<RootStackParamList>();

const CustomNavigationComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="CrewMembers"
        component={CrewMembers}
      />
      <Stack.Screen
        name="CrewMember"
        component={CrewMember}
        options={({ route }) => ({ title: route.params.item.name })}
      />
    </Stack.Navigator>
  );
};
export default CustomNavigationComponent;
``;
