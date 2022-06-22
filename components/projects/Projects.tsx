import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles as globalStyles, colorFor } from "../Style";
import { Project } from "../intern/InternModal";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";

export const Projects = ({ projects }: { projects: Project[] }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [activeSections, setActiveSections] = useState([] as number[]);
  const renderHeader = (project: Project, _: any, isActive: boolean) => {
    return (
      <Animatable.View
        duration={400}
        style={[
          { flexDirection: "row" },
          isActive ? styles.active : styles.inactive,
        ]}
        transition="backgroundColor"
      >
        <View
          style={[
            globalStyles.cardImage,
            { backgroundColor: colorFor(projects.indexOf(project)) },
          ]}
        ></View>
        <View style={globalStyles.cardExtra}>
          <Text style={[globalStyles.text]}>{project.name}</Text>
        </View>
      </Animatable.View>
    );
  };
  const renderContent = (project: Project, _: any, isActive: boolean) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        {project.description ? (
          <Text
            style={[
              globalStyles.text,
              globalStyles.cardExtraSmall,
              { marginTop: 5 },
            ]}
          >
            {"       " + project.description}
          </Text>
        ) : null}
        {project.details ? (
          <View style={{ marginTop: 7 }}>
            {project.details.map((detail, index) => (
              <Text key={index} style={[globalStyles.text, { marginTop: 10 }]}>
                {" - " + detail}
              </Text>
            ))}
          </View>
        ) : null}
      </Animatable.View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingTop: 10 }}>
        <Collapsible collapsed={collapsed}></Collapsible>
        <Accordion
          align="bottom"
          activeSections={activeSections}
          sections={projects}
          touchableComponent={TouchableOpacity}
          expandMultiple={false}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={400}
          onChange={setActiveSections}
          renderAsFlatList={false}
          sectionContainerStyle={[
            globalStyles.card,
            { flexDirection: "column" },
          ]}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  active: {

    backgroundColor: "rgba(30,31,37,1)",
  },
  inactive: {
    backgroundColor: "rgba(30,31,37,0.7)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
