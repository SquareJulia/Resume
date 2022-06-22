import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Intern } from "./InternModal";
import { styles, colorFor } from "../Style";
import { Projects } from "../projects/Projects";

export const InternDetail = ({ data }: { data: Intern }) => {
  const { description, details, projects } = data;
  return (
    <View style={[styles.detail, { flex: 1 }]}>
      {description && (
        <Text style={[styles.text, styles.cardExtraSmall, { fontSize: 20 }]}>
          {description}
        </Text>
      )}
      <View style={[{ marginTop: 10, paddingHorizontal: 10 }]}>
        {details.map((detail: string, index) => (
          <Text style={[styles.text, { marginTop: 10 }]} key={index}>
            {" - " + detail}
          </Text>
        ))}
      </View>
      {projects ? <Projects projects={projects} /> : null}
    </View>
  );
};
