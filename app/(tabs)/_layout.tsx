import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/icon-hide.png")
                  : require("../../assets/images/icon-show.png")
              }
              style={{ width: 34, height: 34}}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/icon-hide.png")
                  : require("../../assets/images/icon-show.png")
              }
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="routine"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/icon-hide.png")
                  : require("../../assets/images/icon-show.png")
              }
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
