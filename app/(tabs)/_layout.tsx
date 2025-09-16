import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // 라벨 숨기고 아이콘만
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/icon-homeN.png")
                  : require("../../assets/images/icon-homeN.png")
              }
              style={{ width: 34, height: 34, marginBottom: -16 }}
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
                  ? require("../../assets/images/icon-homeN.png")
                  : require("../../assets/images/icon-homeN.png")
              }
              style={{ width: 40, height: 40 }}
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
                  ? require("../../assets/images/icon-homeN.png")
                  : require("../../assets/images/icon-homeN.png")
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
