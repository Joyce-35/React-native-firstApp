import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import pic from "./assets/profile.jpeg";

function App() {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.label}>Name</Text>
        <Text style={[styles.label,styles.info]}>Joyce Adzokatse</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.label}>Email</Text>
        <Text style={[styles.label,styles.info]}>Joyzo@gmail.com</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.label}>Gender</Text>
        <Text style={[styles.label,styles.info]}>female</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom:30,
    alignSelf:'center',
    marginTop:100,
  
  },
  details: {
    flexDirection: "row",
    marginVertical:3,
  },
  label:{
    borderColor:"black",
    borderWidth:1,
    fontSize:20,
    flex:2.5,
    paddingHorizontal:10
  },
  info:{
    flex:7.5,
  }
});

export default App;
