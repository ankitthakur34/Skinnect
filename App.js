import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import React from "react";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <View>
      <StatusBar style={styles.androidView} />
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  androidView: {
    marginTop: Platform.OS === "android" ? StatusBar.length : 0,
  },
});
export default App;
