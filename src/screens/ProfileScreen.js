import React, { useState } from "react";
  import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
  import { useColorScheme } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  
  const posts = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGo_sf_640qesM8nJAwE4l9cCUG4W6vv2dSA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31fOhAvT2uhMq7mIZ9taDJBurVbmFDpoj3g&s",
    "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/02/08/Incoming/Pictures/1181996_Wallpaper2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjbbkyAdpmoYrFuMlti8dHVliINRZQKwI3xjYwD7k9Y4gRsozwe6zGeiBLfm6HhfYb0c&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFw1rrjhOg-7Il3sr3kiXuJ-BjdAxEsoFVSw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGo_sf_640qesM8nJAwE4l9cCUG4W6vv2dSA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31fOhAvT2uhMq7mIZ9taDJBurVbmFDpoj3g&s",
    "https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2014/02/08/Incoming/Pictures/1181996_Wallpaper2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzjbbkyAdpmoYrFuMlti8dHVliINRZQKwI3xjYwD7k9Y4gRsozwe6zGeiBLfm6HhfYb0c&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFw1rrjhOg-7Il3sr3kiXuJ-BjdAxEsoFVSw&s"
  ];
  
  export default function ProfileScreen() {
    const [darkMode, setDarkMode] = useState(false);
    const theme = darkMode ? darkStyles : lightStyles;
  
    return (
      <View style={[styles.container, theme.container]}>
        <TouchableOpacity style={styles.toggleButton} onPress={() => setDarkMode(!darkMode)}>
          <Ionicons name={darkMode ? "sunny" : "moon"} size={24} color={darkMode ? "yellow" : "black"} />
        </TouchableOpacity>
        
        <View style={styles.header}>
          <Image
            source={{ uri: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRwwkUlzT7vyiCj89W15P2vbzi0EDeQ8usiOdHXx1_2tYhpEmIh2QybU6Ye2bcXSAwKyhOmOOXr3I05Qmc" }}
            style={styles.profileImage}
          />
          <View style={styles.statsContainer}>
            <Text style={[styles.statsText, theme.text]}>10
              <Text style={styles.statLabel}> Posts</Text>
            </Text>
            <Text style={[styles.statsText, theme.text]}>250
              <Text style={styles.statLabel}> Followers</Text>
            </Text>
            <Text style={[styles.statsText, theme.text]}>180
              <Text style={styles.statLabel}> Following</Text>
            </Text>
          </View>
        </View>
        
        <Text style={[styles.username, theme.text]}>Jr. NTR</Text>
        <Text style={[styles.bio, theme.text]}>This is a short bio about the user.</Text>
  
        <FlatList
          data={posts}
          keyExtractor={(_, index) => index.toString()}
          numColumns={3}
          renderItem={({ item }) => <Image source={{ uri: item }} style={styles.postImage} />}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        marginTop:20,
      flex: 1,
      padding: 10,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    statsContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      flex: 1,
      marginLeft: 20,
    },
    statsText: {
      fontSize: 16,
      fontWeight: "bold",
    },
    statLabel: {
      fontSize: 12,
      fontWeight: "normal",
    },
    username: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    bio: {
      fontSize: 14,
      textAlign: "center",
      marginBottom: 10,
    },
    postImage: {
      width: "32%",
      height: 100,
      margin: 2,
    },
    toggleButton: {
      position: "absolute",
      top: 10,
      right: 10,
    },
  });
  
  const darkStyles = {
    container: { backgroundColor: "#000" },
    text: { color: "#fff" },
  };
  
  const lightStyles = {
    container: { backgroundColor: "#fff" },
    text: { color: "#000" },
  };  