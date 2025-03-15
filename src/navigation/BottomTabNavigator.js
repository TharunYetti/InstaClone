import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
// import ReelsScreen from "../screens/ReelsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CameraScreen from "../screens/CameraScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="home-outline" size={28} color={focused ? "#000" : "#888"} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="search-outline" size={28} color={focused ? "#000" : "#888"} />
          ),
        }}
      />
      
      {/* Custom Middle Tab for Opening Camera */}
      <Tab.Screen
        name="Camera"
        component={HomeScreen} 
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={styles.plusButton}
              onPress={() => navigation.navigate("Home")}
            >
              <FontAwesome name="plus" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Reels"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="play-outline" size={28} color={focused ? "#000" : "#888"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person-outline" size={28} color={focused ? "#000" : "#888"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  plusButton: {
    position: "absolute",
    bottom: 10,
    width: 60,
    height: 60,
    backgroundColor: "#0095F6",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});