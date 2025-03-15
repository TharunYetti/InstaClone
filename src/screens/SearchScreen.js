import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const dummyPosts = [
  {
    id: "1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOhcHqygY7SYyjZbg9nrWef9lv8EtXpXD4Q&s",
    caption: "Beautiful Sunset",
  },
  {
    id: "2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyTciLm3Sa2vseL1-gnSb7y4_ySERxWNDasQ&s",
    caption: "Mountain View",
  },
  {
    id: "3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsG371YWacWuhuzXO9vOYW8X8ZB-Z3NeXwHxgxXp3z3ETaQB_5TJ8g5Qjo8oewMsDsMk&usqp=CAU",
    caption: "City Lights",
  },
  {
    id: "4",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuK0hIJCbr0Pmi09uYQg7qW6GJRtt5qJ7frg&s",
    caption: "Beach Vibes",
  },
  {
    id: "5",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDpU4ogFjlZTm3C1h5WoQEjc3P3KWVh8rIg&s",
    caption: "Beach Vibes",
  },
  {
    id: "6",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbS-hr5le-2XfxdflGCMJ8t8AwgBZwL7MMzaNvx6B4C-GfdJ0MsYbgtIjdzjqAdBG4jk&usqp=CAU",
    caption: "Beach Vibes",
  },
  {
    id: "7",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQERhG--wI3oNIJ9D2TQAJ9V8KnNM49P5F2Tw&s",
    caption: "Beach Vibes",
  },
  {
    id: "8",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjD9C2N2DGPvS0vVCijIgOCgvKw7Pm2612Kw&s",
    caption: "Beach Vibes",
  },
  {
    id: "9",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuK0hIJCbr0Pmi09uYQg7qW6GJRtt5qJ7frg&s",
    caption: "Beach Vibes",
  },
  {
    id: "10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuK0hIJCbr0Pmi09uYQg7qW6GJRtt5qJ7frg&s",
    caption: "Beach Vibes",
  },
  {
    id: "11",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuK0hIJCbr0Pmi09uYQg7qW6GJRtt5qJ7frg&s",
    caption: "Beach Vibes",
  },
  {
    id: "12",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuK0hIJCbr0Pmi09uYQg7qW6GJRtt5qJ7frg&s",
    caption: "Beach Vibes",
  }
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Posts List */}
      <FlatList
        data={dummyPosts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.postContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.caption}>{item.caption}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:16,
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 8,
    margin: 10,
    borderRadius: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  postContainer: {
    flex: 1,
    margin: 5,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  caption: {
    marginTop: 5,
    fontSize: 12,
    color: "gray",
  },
});