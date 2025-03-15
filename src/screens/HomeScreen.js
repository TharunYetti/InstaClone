import React,{useState} from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../config/firebaseConfig"; // Import Firebase auth for user management

const posts = [
  {
    id: "1",
    username: "john_doe",
    imageUrl: "https://marketplace.canva.com/EAF-43gIi8Q/2/0/1600w/canva-brown-photo-collage-instagram-post-JNn9YFKSqNY.jpg",
    caption: "A beautiful day! 🌞",
  },
  {
    id: "2",
    username: "jane_doe",
    imageUrl: "https://marketplace.canva.com/EAE2pXyqyx0/1/0/1600w/canva-simple-instagram-frame-template-instagram-post-ObQSn5BL2ZQ.jpg",
    caption: "Loving the vibes! ❤️",
  },
  {
    id: "3",
    username: "alex_92",
    imageUrl: "https://marketplace.canva.com/EAF-43gIi8Q/2/0/1600w/canva-brown-photo-collage-instagram-post-JNn9YFKSqNY.jpg",
    caption: "Great memories! 📸",
  },
];

export default function HomeScreen({ navigation }) {
  const currentUser = {
    uid: "123", 
    name: "You",
    image: "https://cdn-icons-png.flaticon.com/512/847/847969.png" // Default profile pic
  };
  const [stories, setStories] = useState([
    { id: "1", name: "User1", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: "2", name: "User2", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: "3", name: "User3", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: "4", name: "User4", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: "5", name: "User5", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  ]);
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.replace("SignIn");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };
  const handleAddStory = () => {
    alert("Open Story Upload Functionality");
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <Image
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" }}
          style={styles.logo}
        /> */}
        <Text style={styles.cloneName}>Instagram</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* Stories Section */}
      <FlatList
        data={[currentUser, ...stories]} // First item is "Add Story"
        horizontal={true}
        keyExtractor={(item) => item.id || "currentUser"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity 
            style={styles.storyItem} 
            onPress={index === 0 ? handleAddStory : () => alert(`Viewing ${item.name}'s story`)}
          >
            <Image source={{ uri: item.image }} style={[styles.storyImage, index === 0 && styles.addStory]} />
            {index === 0 && (
                <View style={styles.plusIconContainer}>
                  <Text style={styles.plusIcon}>+</Text>
                </View>
              )}
            <Text style={styles.storyName}>{index === 0 ? "Your Story" : item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* Post Feed */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.username}>{item.username}</Text>
            <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop:16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  logo: {
    width: 40,
    height: 40,
  },
  logoutText: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
  storyItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  storyName: {
    fontSize: 12,
    marginTop: 5,
    color: "#333",
  },
  post: {
    marginBottom: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  postImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  caption: {
    marginTop: 5,
    fontSize: 14,
  },
  cloneName:{
    fontSize:20,
    fontWeight:"bold"
  },storyItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  storyContainer: {
    position: "relative",
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FF4500",
  },
  addStory: {
    borderColor: "#0095F6", // Blue border for "Add Story"
    borderWidth: 3,
  },
  plusIconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 22,
    height: 22,
    backgroundColor: "#0095F6",
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  plusIcon: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});