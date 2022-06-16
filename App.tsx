/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, ReactNode } from "react";
import basic from "./local_json/basic.json";
import education from "./local_json/education.json";
import intern from "./local_json/intern.json";
import projects from "./local_json/projects.json";
import { AppScreen } from "./components/AppScreen";
import { Basic } from "./components/Basic";
import { Intern, InternModal } from "./components/InternModal";
import { styles } from "./components/Style";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { InternDetail } from "./components/InternDetail";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { BaseItem, BaseItemType } from "./components/BaseItem";
import { Projects } from "./components/Projects";
import { TopLabel } from "./components/TopLabel";

const Stack = createNativeStackNavigator();
const DetailScreen = ({ navigation, route }) => {

  const data = route.params.data;
  //not functional
  return (
    <View style={styles.outer}>
      <TopLabel label={"About me"} />
      {route.params.type == "Intern" ? (
        <InternDetail data={data as Intern} />
      ) : (
        <></>
      )}
    </View>
  ); //TODO
};
const ResumeScreen = ({ navigation, route }) => {
  const [item, setItem] = useState("基本信息");
  return (
    <Profile
      label="About me"
      items={["基本信息", "教育背景", "实习经历", "项目经历"]}
      selectedItem={item}
      setSelectedItem={setItem}
      navigation={navigation}
    ></Profile>
  );
};

const ProfileContent = ({
  navigation,
  selected,
}: {
  navigation: any;
  selected: string;
}) => {
  
  switch (selected) {
    case "基本信息":
      return <Basic data={basic}></Basic>;
    case "教育背景":
      return (
        <FlatList
          data={education.education_experience}
          keyExtractor={({ what }, index) => what}
          renderItem={({ item, index }) => (
            <BaseItem data={item} id={index} activeOpacity={0.7} />
          )}
        />
      );
    case "实习经历":
      return (
        <FlatList
          data={intern.intern_experience}
          keyExtractor={({ what }, index) => what}
          renderItem={({ item, index }) => (
            <BaseItem
              data={item}
              id={index}
              showDetail={() =>
                navigation.navigate("Detail", {
                  type: "Intern",
                  data: item,
                })
              }
            />
          )}
        />
      );
    case "项目经历":
      return (
        <Projects projects={projects.projects} />
        // <Example />
      );
    default:
      return <></>;
  }
};

const Profile = ({
  label,
  items,
  selectedItem,
  setSelectedItem,
  navigation,
}: // requestApis,
{
  label: string;
  items: string[];
  selectedItem: string;
  setSelectedItem: Function;
  navigation: any;
  // requestApis: { [key: string]: string };
}) => {
  return (
    <View style={styles.outer}>
      <TopLabel label={label} />
      <View style={styles.row}>
        {items.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setSelectedItem(item)}
            style={[styles.item, selectedItem == item && styles.selectedItem]}
          >
            <Text
              style={[
                styles.text,
                styles.itemLabel,
                selectedItem == item && styles.selectedLabel,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ProfileContent selected={selectedItem} navigation={navigation} />
    </View>
  );
};

export const Card = ({ children }: { children: ReactNode }) => (
  <TouchableOpacity style={styles.card}>{children}</TouchableOpacity>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AppScreen} />
        <Stack.Screen name="Resume" component={ResumeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
