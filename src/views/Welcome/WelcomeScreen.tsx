import React from "react";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Button,
} from "react-native";

import { Colors, Header } from "react-native/Libraries/NewAppScreen";
export const WelcomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Header />
        <Button
          title="Go to Resume"
          onPress={() => navigation.navigate("Resume", { name: "x" })}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
